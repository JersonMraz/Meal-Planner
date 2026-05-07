import { loginUser } from "@/app/lib/services/authService";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies();
        const { email, password } = await req.json();

        if (!email && !password) {
            return Response.json({ success: false, error: "Email address and password are required." }, { status: 400 });
        }

        if (!email) {
            return Response.json({ success: false, error: "Email address is required." }, { status: 400 });
        }

        if (!password) {
            return Response.json({ success: false, error: "Password is required." }, { status: 400 });
        }

        const { user, token } = await loginUser(email, password);

        cookieStore.set("jerson_prepwise_token", token, {
            httpOnly: true,
            path: "/",
        });

        return Response.json({ success: true, user });
    } catch (err: any) {
        return Response.json({ success: false, error: err.message }, { status: 400 });
    }
}