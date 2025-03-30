import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define public routes
const publicRoutes = ["/", "/login", "/register"];

// Define routes that require authentication
const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const accessToken = request.cookies.get("accessToken")?.value;

  console.log("Middleware: Path:", path);
  console.log("Middleware: accessToken:", !!accessToken);

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);

  if (!accessToken && isProtectedRoute) {
    console.log(
      "Middleware: Redirecting to /login (Not logged in, is protected)"
    );
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //  Allow access to public routes, regardless of login status
  if (isPublicRoute) {
    console.log("Middleware: Allowing access to public route");
    return NextResponse.next();
  }

  // If there is a token, allow the user to proceed
  if (accessToken) {
    console.log("Middleware: Allowing access because accessToken exists");
    return NextResponse.next();
  }
  //If none of the above conditions are met, redirect to login
  console.log("Middleware: Default redirect to /login");
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
