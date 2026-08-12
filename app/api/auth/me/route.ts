import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/db/prisma";
import { unstable_cache } from "next/cache";

const getCachedUser = (userId: number) =>
    unstable_cache(
        async (id: number) => {
            const user = await prisma.user.findUnique({
                where: { id },
                include: {
                    dietaryPreferences: true,
                    notificationSettings: true,
                    languageAndRegion: true,
                },
            });

            if (user) {
                // Remove sensitive data before caching
                const { password, ...safeUser } = user;
                return safeUser;
            }

            return null;
        },
        [`user-profile-${userId}`],
        { tags: [`user-${userId}`], revalidate: 3600 } // Cache for 3600seconds or 1hour
    )(userId);

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("jerson_prepwise_token")?.value;

    if (!token) {
        return Response.json({ user: null }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: string;
        };

        const uId = Number(decoded.userId);

        // Use cached DB query
        const user = await getCachedUser(uId);

        return Response.json({ user });
    } catch (error) {
        // Handle invalid/expired tokens gracefully
        return Response.json({ user: null, error: "Invalid token" }, { status: 401 });
    }
}