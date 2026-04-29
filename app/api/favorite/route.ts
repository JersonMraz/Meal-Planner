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