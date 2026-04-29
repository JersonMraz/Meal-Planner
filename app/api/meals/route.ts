import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const returnAll = searchParams.get("all") === "true";
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "6");
        const skip = (page - 1) * limit;

        const [meals, total, uniqueDiets, uniqueCuisines] = await Promise.all([
            prisma.meal.findMany({
                include: {
                    Ingredients: true,
                    Instructions: true,
                    Nutrition: true,
                    Favorite: true
                },
                orderBy: { id: "asc" },
                ...(!returnAll && { take: limit, skip: skip })
            }),
            prisma.meal.count(),
            prisma.meal.findMany({
                select: { diet_type: true },
                distinct: ['diet_type'],
            }),
            prisma.meal.findMany({
                select: { cuisine: true },
                distinct: ['cuisine'],
            })
        ]);

        const diets = uniqueDiets.map((d: any) => d.diet_type);
        const cuisines = uniqueCuisines.map((c: any) => c.cuisine);

        return Response.json({
            success: true,
            meals,
            diets,
            cuisines,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.log("Error fetching meals:", error);
        return Response.json({ error: "Failed to fetch meals" }, { status: 500 });
    }
}