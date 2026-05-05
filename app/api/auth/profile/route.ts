import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";

export async function PUT(request: Request) {
    const cookieStore = await cookies();
    const token = cookieStore.get("jerson_prepwise_token")?.value;

    if (!token) {
        return Response.json({ user: null }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: string;
    };

    const uId = Number(decoded.userId);

    const body = await request.json();
    const { firstname, lastname, bio, profile_picture } = body;

    const user = await prisma.user.update({
        where: { id: uId },
        data: {
            firstname,
            lastname,
            bio,
            profile_picture,
        }
    });

    await prisma.notifications.create({
        data: {
            user_id: uId,
            type: "profile_updated",
            title: "Profile Updated",
            description: "Your profile has been updated successfully.",
            icon: "User",
            icon_class: "bg-info/15 text-info border-info/30",
            link: "/settings"
        }
    });

    return Response.json({ user });
}
