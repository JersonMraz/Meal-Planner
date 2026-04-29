import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("jerson_prepwise_token")?.value;
    const { pathname } = request.nextUrl;

    if (token && (pathname === "/signin" || pathname === "/signup")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    const protectedPaths = ["/dashboard", "/recipes", "/mealplanner", "/grocerylist", "/favorites", "/settings"];
    const isProtected = protectedPaths.some(path => pathname.startsWith(path));

    if (!token && isProtected) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/signin", "/signup", "/dashboard/:path*", "/recipes/:path*", "/mealplanner/:path*", "/grocerylist/:path*", "/favorites/:path*", "/settings/:path*"],
};
