import { registerUser } from "@/app/lib/services/authService";

export async function POST(req: Request) {
    try {
        const { firstname, lastname, email, password } = await req.json();

        if (!firstname && !lastname && !email && !password) {
            return Response.json({ success: false, error: "All fields are required." }, { status: 400 });
        }

        if (!email && !password) {
            return Response.json({ success: false, error: "Email address and password are required." }, { status: 400 });
        }

        if (!firstname && !lastname) {
            return Response.json({ success: false, error: "First name and last name are required." }, { status: 400 });
        }

        if (!email) {
            return Response.json({ success: false, error: "Email address is required." }, { status: 400 });
        }

        if (!password) {
            return Response.json({ success: false, error: "Password is required." }, { status: 400 });
        }

        if (!firstname) {
            return Response.json({ success: false, error: "First name is required." }, { status: 400 });
        }

        if (!lastname) {
            return Response.json({ success: false, error: "Last name is required." }, { status: 400 });
        }

        const user = await registerUser(firstname, lastname, email, password);

        return Response.json({ success: true, user });
    } catch (err: any) {
        return Response.json({ success: false, error: err.message }, { status: 400 });
    }
}