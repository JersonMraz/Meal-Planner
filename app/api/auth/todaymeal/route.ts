import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("jerson_prepwise_token")?.value;

        if (!token) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: string;
        };

        const uId = Number(decoded.userId);

        const user = await prisma.user.findUnique({
            where: { id: uId },
        });

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        const today = new Date();
        const dateStr = today.toISOString().split('T')[0];

        const meal = await prisma.mealPlan.findMany({
            where: {
                user_id: uId,
                date: dateStr,
            },
            include: {
                Meal: {
                    include: {
                        Nutrition: {
                            select: {
                                calories: true
                            }
                        }
                    }
                },
            },
        });

        if (!meal) {
            return Response.json({ error: "Meal not found" }, { status: 404 });
        }

        return Response.json(meal, {
            status: 200,
        });
    } catch (error) {
        console.log("Error fetching meal:", error);
        return new Response("Internal server error", {
            status: 500,
        });
    }
}