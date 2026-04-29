import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    cookieStore.set("jerson_prepwise_token", "", {
        httpOnly: true,
        expires: new Date(0),
        path: "/",
    });

    return Response.json({ success: true });
}
