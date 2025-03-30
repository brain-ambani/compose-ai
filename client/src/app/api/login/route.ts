import { NextResponse, NextRequest } from "next/server";
import { serialize } from "cookie";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Forward the request to your Express backend
    const backendResponse = await axios.post(
      "http://localhost:8000/api/v1/auth/login", // Your Express backend URL
      { email, password }
    );

    // If the backend login is successful...
    if (backendResponse.status === 200) {
      const { accessToken } = backendResponse.data.result;

      // Set the HTTP-only cookie
      const cookie = serialize("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 3600, // 1 hour
      });

      return new NextResponse(JSON.stringify({ message: "Login successful" }), {
        status: 200,
        headers: { "Set-Cookie": cookie }, // Set the cookie in the response headers
      });
    } else {
      // Pass the backend response status and data
      return NextResponse.json(backendResponse.data, {
        status: backendResponse.status,
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Handle errors from your backend API or network errors
    const errorMessage = error.response?.data?.message || "Login failed";
    return NextResponse.json(
      { message: errorMessage },
      { status: error.response?.status || 500 }
    );
  }
}
