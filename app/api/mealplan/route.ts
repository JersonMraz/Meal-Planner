import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return Response.json({ error: "Missing userId" }, { status: 400 });
        }

        const mealPlans = await prisma.mealPlan.findMany({
            where: { user_id: Number(userId) },
            include: { Meal: true },
        });

        return Response.json({ mealPlans });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, date, meal_type, meal_id } = body;

        const uId = Number(userId);
        const mId = Number(meal_id);

        if (!uId || !date || !meal_type) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (mId) {
            // Check if there's an existing meal plan at this slot to handle ingredient cleanup if meal changes
            const existing = await prisma.mealPlan.findUnique({
                where: {
                    user_id_date_meal_type: {
                        user_id: uId,
                        date,
                        meal_type
                    }
                }
            });

            if (existing && existing.meal_id !== mId) {
                // Meal changed for this slot, remove the ingredients of the old meal
                await prisma.groceryItem.deleteMany({
                    where: {
                        user_id: uId,
                        meal_plan_id: existing.id
                    }
                });
            }

            // Upsert the meal plan
            const mealPlan = await prisma.mealPlan.upsert({
                where: {
                    user_id_date_meal_type: {
                        user_id: uId,
                        date,
                        meal_type
                    }
                },
                update: {
                    meal_id: mId
                },
                create: {
                    user_id: uId,
                    date,
                    meal_type,
                    meal_id: mId
                },
                include: {
                    Meal: {
                        include: {
                            Ingredients: true
                        }
                    }
                }
            });

            const ingredientCount = mealPlan.Meal.Ingredients.length;

            // Determine if the date is this week or next week
            const plannedDate = new Date(date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Calculate the end of the current week (Sunday)
            const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday...
            const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
            const endOfThisWeek = new Date(today);
            endOfThisWeek.setDate(today.getDate() + daysUntilSunday);
            endOfThisWeek.setHours(23, 59, 59, 999);

            const weekLabel = plannedDate > endOfThisWeek ? "next week's plan" : "this week's plan";

            // Create notification for the new meal plan
            await prisma.notifications.create({
                data: {
                    user_id: uId,
                    type: "grocery_list_updated",
                    title: "Grocery list updated",
                    description: `${ingredientCount} new ingredients were added from ${weekLabel}.`,
                    icon: "ShoppingCart",
                    icon_class: "bg-accent/15 text-accent",
                    link: "/grocerylist"
                }
            });

            return Response.json({ mealPlan, action: "upserted" });
        } else {
            // Delete if meal_id is missing/null (removed)
            const existing = await prisma.mealPlan.findUnique({
                where: {
                    user_id_date_meal_type: {
                        user_id: uId,
                        date,
                        meal_type
                    }
                }
            });
            if (existing) {
                // Remove ingredients associated with this specific meal plan entry
                await prisma.groceryItem.deleteMany({
                    where: {
                        user_id: uId,
                        meal_plan_id: existing.id
                    }
                });

                await prisma.mealPlan.delete({
                    where: { id: existing.id }
                });
            }
            return Response.json({ action: "deleted" });
        }
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
