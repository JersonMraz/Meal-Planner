import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const uId = Number(userId);

    if (isNaN(uId)) return Response.json({ error: "Invalid user ID" }, { status: 400 });

    try {
        const [totalFavorites] = await Promise.all([
            prisma.favorite.count({
                where: { user_id: uId },
            }),
        ]);

        return Response.json({
            totalFavorites
        });
    } catch (error) {
        console.error("Error getting stats:", error);
        return new Response("Error getting stats", { status: 500 });
    }
}