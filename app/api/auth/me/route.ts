import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("jerson_prepwise_token")?.value;

    if (!token) {
        return Response.json({ user: null }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: string;
    };

    const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
    });

    return Response.json({ user });
}