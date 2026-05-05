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

    const { mealReminders, groceryReminders, weeklyDigest, productUpdates, pushEnabled, emailEnabled, reminderTime } = await req.json();

    const updatedUser = await prisma.notificationSettings.upsert({
        where: { user_id: uId },
        update: {
            meal_reminders: mealReminders as boolean,
            grocery_reminders: groceryReminders as boolean,
            weekly_digest: weeklyDigest as boolean,
            product_updates: productUpdates as boolean,
            push_enabled: pushEnabled as boolean,
            email_enabled: emailEnabled as boolean,
            reminder_time: reminderTime as string,
        },
        create: {
            user_id: uId,
            meal_reminders: mealReminders as boolean,
            grocery_reminders: groceryReminders as boolean,
            weekly_digest: weeklyDigest as boolean,
            product_updates: productUpdates as boolean,
            push_enabled: pushEnabled as boolean,
            email_enabled: emailEnabled as boolean,
            reminder_time: reminderTime as string,
        }
    });

    await prisma.notifications.create({
        data: {
            user_id: uId,
            type: "notification_preferences_updated",
            title: "Notification Preferences Updated",
            description: "Your notification preferences has been updated successfully.",
            icon: "Bell",
            icon_class: "bg-accent/15 text-accent border-accent/30",
            link: "/settings"
        }
    });

    return Response.json({ user: updatedUser });
}