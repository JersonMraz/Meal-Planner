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

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const uId = Number(decoded.userId);

        const notifications = await prisma.notifications.findMany({
            where: { user_id: uId },
            orderBy: { created_at: "desc" },
        });

        const formatRelativeTime = (date: Date) => {
            const now = new Date();
            const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

            if (diffInSeconds < 60) return "Just now";

            const diffInMinutes = Math.floor(diffInSeconds / 60);
            if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

            const diffInHours = Math.floor(diffInMinutes / 60);
            if (diffInHours < 24) return `${diffInHours}h ago`;

            const diffInDays = Math.floor(diffInHours / 24);
            if (diffInDays < 7) return `${diffInDays}d ago`;

            return date.toLocaleDateString();
        };

        const formatted = notifications.map(n => ({
            ...n,
            time: formatRelativeTime(n.created_at),
        }));

        return Response.json(formatted);
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("jerson_prepwise_token")?.value;

        if (!token) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const uId = Number(decoded.userId);

        const body = await req.json();
        const { id, markAllAsRead } = body;

        if (markAllAsRead) {
            await prisma.notifications.updateMany({
                where: { user_id: uId },
                data: { is_read: true },
            });
        } else if (id) {
            await prisma.notifications.update({
                where: { id: Number(id) },
                data: { is_read: true },
            });
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error updating notifications:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("jerson_prepwise_token")?.value;

        if (!token) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const uId = Number(decoded.userId);

        const body = await req.json();
        const { title, description, type, icon, icon_class, link } = body;

        const notification = await prisma.notifications.create({
            data: {
                user_id: uId,
                title,
                description,
                type,
                icon,
                icon_class,
                link,
            },
        });

        return Response.json(notification);
    } catch (error) {
        console.error("Error creating notification:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}
