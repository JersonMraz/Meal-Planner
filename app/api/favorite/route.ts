import { prisma } from "@/app/lib/db/prisma";

export async function POST(req: Request) {
    try {
        // Read data from the JSON body instead of URL params
        const body = await req.json();
        const { mealId, userId } = body;

        const mId = Number(mealId);
        const uId = Number(userId);

        if (!mId || isNaN(mId)) return Response.json({ error: "Invalid meal ID" }, { status: 400 });
        if (!uId || isNaN(uId)) return Response.json({ error: "Invalid user ID" }, { status: 400 });

        // Simple Rate Limit: Check if the user has added a favorite in the last 2 seconds
        const recentNotification = await prisma.notifications.findFirst({
            where: {
                user_id: uId,
                type: "favorite_added",
                created_at: {
                    gte: new Date(Date.now() - 2000) // 2 seconds ago
                }
            }
        });

        if (recentNotification) {
            return Response.json({ error: "Slow down! You're favoriting too fast." }, { status: 429 });
        }

        const existing = await prisma.favorite.findFirst({
            where: {
                meal_id: mId,
                user_id: uId
            }
        });

        // Toggle logic: If it exists, delete it (unfavorite)
        if (existing) {
            await prisma.favorite.delete({
                where: { id: existing.id }
            });
            return Response.json({ favorite: null, action: "removed" });
        }

        // If it doesn't exist, create it (favorite)
        const favorite = await prisma.favorite.create({
            data: {
                meal_id: mId,
                user_id: uId
            },
            include: {
                Meal: true
            }
        });

        // Create a notification for the user
        await prisma.notifications.create({
            data: {
                user_id: uId,
                type: "favorite_added",
                title: "Saved to favorites",
                description: `“${favorite.Meal.name}” was added to your favorites.`,
                icon: "Heart",
                icon_class: "bg-secondary text-foreground",
                link: "/favorites"
            }
        });

        return Response.json({ favorite, action: "added" });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        const uId = Number(userId);

        if (isNaN(uId)) return Response.json({ error: "Invalid meal ID" }, { status: 400 });

        const favorite = await prisma.favorite.findMany({
            where: {
                user_id: uId,
            },
            include: {
                Meal: {
                    include: {
                        Nutrition: true
                    },
                },
            },
        });
        return Response.json({ favorite });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}