import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get("q");

        if (!query) {
            return Response.json({ error: "No query provided" }, { status: 400 });
        }

        const meals = await prisma.meal.findMany({
            where: {
                OR: [
                    { name: { contains: query, mode: "insensitive" } },
                    { Ingredients: { some: { name: { contains: query, mode: "insensitive" } } } }
                ]
            },
            include: {
                Ingredients: true,
                Instructions: true,
                Nutrition: true
            }
        });

        // Sort: prioritize meals where the name matches the query
        const sortedMeals = meals.sort((a: any, b: any) => {
            const queryLower = query.toLowerCase();
            const aNameLower = a.name.toLowerCase();
            const bNameLower = b.name.toLowerCase();

            const aStarts = aNameLower.startsWith(queryLower);
            const bStarts = bNameLower.startsWith(queryLower);

            const aContains = aNameLower.includes(queryLower);
            const bContains = bNameLower.includes(queryLower);

            // 1. Prioritize meals that START with the query
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;

            // 2. Prioritize meals that CONTAIN the query
            if (aContains && !bContains) return -1;
            if (!aContains && bContains) return 1;

            // 3. Fallback: alphabetical
            return a.name.localeCompare(b.name);
        });

        return Response.json({ success: true, meals: sortedMeals });
    } catch (error) {
        console.log("Error searching meals:", error);
        return Response.json({ error: "Failed to search meals" }, { status: 500 });
    }
}