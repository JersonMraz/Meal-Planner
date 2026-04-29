import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    console.log("API RECEIVED ID:", id);

    if (!id) {
        return Response.json({ error: "ID is missing from params" }, { status: 400 });
    }

    const mealId = Number(id);
    if (isNaN(mealId)) {
        return Response.json({ error: "Invalid ID format" }, { status: 400 });
    }

    try {
        const meal = await prisma.meal.findUnique({
            where: { id: mealId },
            include: {
                Ingredients: true,
                Instructions: true,
                Nutrition: true
            }
        });

        if (!meal) {
            return Response.json({ error: "Meal not found" }, { status: 404 });
        }

        return Response.json({ meal });
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}