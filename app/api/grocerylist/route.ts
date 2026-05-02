import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return Response.json({ error: "Missing userId" }, { status: 400 });
        }

        const items = await prisma.groceryItem.findMany({
            where: { user_id: Number(userId) },
            orderBy: { id: "asc" }
        });

        return Response.json({ items });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, action, payload } = body;

        const uId = Number(userId);

        if (!uId || !action) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (action === "add") {
            const { category, name } = payload;
            const item = await prisma.groceryItem.create({
                data: {
                    user_id: uId,
                    category,
                    name,
                    checked: false
                }
            });
            return Response.json({ item });
        }
        else if (action === "toggle") {
            const { id, checked } = payload;
            const item = await prisma.groceryItem.update({
                where: { id: Number(id) },
                data: { checked }
            });
            return Response.json({ item });
        }
        else if (action === "delete") {
            const { id } = payload;
            await prisma.groceryItem.delete({
                where: { id: Number(id) }
            });
            return Response.json({ success: true });
        }
        else if (action === "clear_checked") {
            await prisma.groceryItem.deleteMany({
                where: { user_id: uId, checked: true }
            });
            return Response.json({ success: true });
        }
        else if (action === "sync_mealplan") {
            const today = new Date();
            // Go back 1 day to be safe with timezones
            today.setDate(today.getDate() - 1);
            const dateStr = today.toISOString().split('T')[0];

            console.log("SYNC: Today-1 day is:", dateStr);

            const mealPlans = await prisma.mealPlan.findMany({
                where: {
                    user_id: uId,
                    date: { gte: dateStr }
                },
                include: { Meal: { include: { Ingredients: true } } }
            });

            console.log(`SYNC: Found ${mealPlans.length} upcoming meal plans for user ${uId}`);

            const mealPlanIds = mealPlans.map(mp => mp.id);

            // 1. Cleanup: Remove items for deleted or past meal plans
            await prisma.groceryItem.deleteMany({
                where: {
                    user_id: uId,
                    meal_plan_id: { not: null, notIn: mealPlanIds }
                }
            });

            // 2. Cleanup: Remove items where the meal for that slot has changed
            for (const mp of mealPlans) {
                const expectedSuffix = `(For ${mp.Meal.name.trim()})`;
                await prisma.groceryItem.deleteMany({
                    where: {
                        user_id: uId,
                        meal_plan_id: mp.id,
                        NOT: {
                            name: { endsWith: expectedSuffix }
                        }
                    }
                });
            }

            // 3. Add missing ingredients & Deduplicate existing
            const existingItems = await prisma.groceryItem.findMany({
                where: { user_id: uId, meal_plan_id: { not: null } }
            });
            
            const existingMap = new Set<string>();
            for (const item of existingItems) {
                const key = `${item.meal_plan_id}_${item.name.toLowerCase()}`;
                if (existingMap.has(key)) {
                    // This is a duplicate (likely from a race condition), remove it
                    await prisma.groceryItem.delete({ where: { id: item.id } });
                } else {
                    existingMap.add(key);
                }
            }

            const newItems = [];
            for (const mp of mealPlans) {
                console.log(`SYNC: Checking meal: ${mp.Meal.name} (ID: ${mp.id}) with ${mp.Meal.Ingredients.length} ingredients`);
                for (const ing of mp.Meal.Ingredients) {
                    const fullName = `${ing.name.trim()} (For ${mp.Meal.name.trim()})`;
                    const key = `${mp.id}_${fullName.toLowerCase()}`;

                    if (!existingMap.has(key)) {
                        const newItem = await prisma.groceryItem.create({
                            data: {
                                user_id: uId,
                                category: "Other",
                                name: fullName,
                                checked: false,
                                meal_plan_id: mp.id
                            }
                        });
                        console.log(`SYNC: Added item: ${fullName}`);
                        newItems.push(newItem);
                    }
                }
            }
            return Response.json({ success: true, added: newItems });
        }

        return Response.json({ error: "Invalid action" }, { status: 400 });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
