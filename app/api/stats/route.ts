import { prisma } from "@/app/lib/db/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const uId = Number(userId);

    if (isNaN(uId)) return Response.json({ error: "Invalid user ID" }, { status: 400 });

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setHours(0, 0, 0, 0);
    // Get Monday of current week
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    const [totalFavorites, totalMealPlans, weekData, historyData] = await Promise.all([
        prisma.favorite.count({
            where: { user_id: uId },
        }),
        prisma.mealPlan.count({
            where: { user_id: uId, }
        }),
        prisma.mealPlan.findMany({
            where: {
                user_id: uId,
                date: {
                    gte: startOfWeek.toISOString().split('T')[0],
                    lte: endOfWeek.toISOString().split('T')[0],
                },
            },
            select: { date: true },
            distinct: ['date'],
        }),
        prisma.mealPlan.findMany({
            where: {
                user_id: uId,
                date: {
                    lte: yesterdayStr
                }
            },
            select: {
                Meal: {
                    select: {
                        Nutrition: {
                            select: {
                                calories: true
                            }
                        }
                    }
                }
            }
        })
    ]);

    const caloriesList = historyData
        .map(mp => mp.Meal?.Nutrition?.calories)
        .filter((c): c is number => c !== null && c !== undefined);

    const averageCalories = caloriesList.length > 0
        ? Math.round(caloriesList.reduce((a, b) => a + b, 0) / caloriesList.length)
        : 0;

    const thisWeek = weekData.length;

    return Response.json({
        totalFavorites,
        totalMealPlans,
        thisWeek,
        averageCalories
    });
}