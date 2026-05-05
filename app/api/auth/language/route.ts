import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";

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

        await prisma.languageAndRegion.upsert({
            where: { user_id: uId },
            update: {
                language: body.language,
                region: body.region,
                weekStart: body.weekStart,
            },
            create: {
                user_id: uId,
                language: body.language,
                region: body.region,
                weekStart: body.weekStart,
            },
        });

        await prisma.notifications.create({
            data: {
                user_id: uId,
                type: "language_and_region_updated",
                title: "Language and Region Updated",
                description: "Your language and region has been updated successfully.",
                icon: "Globe",
                icon_class: "bg-brand/15 text-brand border-brand/30",
                link: "/settings"
            }
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error("Error updating language:", error);
        return Response.json({ error: "Internal server error" }, { status: 500 });
    }
}