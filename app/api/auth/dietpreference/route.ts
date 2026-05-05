import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";

export async function PUT(req: Request) {
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

    const { diet, allergens, cuisines, calorieGoal } = await req.json();

    const updatedUser = await prisma.dietaryPreferences.upsert({
        where: { user_id: uId },
        update: {
            default_diet: diet as string,
            allergens: allergens as string[],
            favorite_cuisines: cuisines as string[],
            calorieGoal: calorieGoal as number,
        },
        create: {
            user_id: uId,
            default_diet: diet as string,
            allergens: allergens as string[],
            favorite_cuisines: cuisines as string[],
            calorieGoal: calorieGoal as number,
        }
    });

    await prisma.notifications.create({
        data: {
            user_id: uId,
            type: "diet_preference_updated",
            title: "Diet Preference Updated",
            description: "Your diet preferences has been updated successfully.",
            icon: "Utensils",
            icon_class: "bg-primary/15 text-primary border-primary/30",
            link: "/settings"
        }
    });

    return Response.json({ user: updatedUser });
}   