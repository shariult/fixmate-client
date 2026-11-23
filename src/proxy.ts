import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getCurrentUser } from "@/lib/authActions";

export async function proxy(req: NextRequest) {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.redirect(new URL("/signin?toast=auth", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
