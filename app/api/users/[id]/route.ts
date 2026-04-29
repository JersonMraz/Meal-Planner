import { prisma } from "@/app/lib/db/prisma";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
        return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        return Response.json(user);
    } catch (err) {
        console.error("PRISMA ERROR:", err);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const userId = parseInt(id);
    const body = await req.json();

    if (isNaN(userId)) {
        return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: body,
        });

        return Response.json(updatedUser);
    } catch (err) {
        return Response.json({ error: "Could not update user" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
        return Response.json({ error: "Invalid ID" }, { status: 400 });
    }

    try {
        await prisma.user.delete({
            where: { id: userId },
        });

        return Response.json({ message: "User deleted" });
    } catch (err) {
        return Response.json({ error: "Could not delete user" }, { status: 500 });
    }
}