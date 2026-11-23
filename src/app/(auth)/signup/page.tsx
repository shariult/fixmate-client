import React from "react";
import Link from "next/link";
import { PiWrenchBold } from "react-icons/pi";
import UserForm from "@/components/ui/user/UserForm";
import SocialSignIn from "@/components/ui/user/SocialSignIn";
import SignUpAside from "./_components/SignUpAside";
import { getCurrentUser } from "@/lib/authActions";
import { redirect } from "next/navigation";

async function SignUpPage() {
  const session = await getCurrentUser();
  if (session) {
    redirect("/");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <SignUpAside />

      <main className="flex items-center justify-center px-4 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 lg:hidden mb-8">
            <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-content">
              <PiWrenchBold />
            </span>
            <span className="font-title text-xl font-semibold tracking-tight">
              FixMate
            </span>
          </Link>
          <h1 className="heading-2">Create your account</h1>
          <p className="mt-2 text-muted">
            Already registered?{" "}
            <Link
              href="/signin"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>

          <div className="mt-8">
            <SocialSignIn className="w-full" />
            <div className="divider my-6 text-xs text-muted">
              or use your email
            </div>
          </div>

          <UserForm type="signup" />
        </div>
      </main>
    </div>
  );
}

export default SignUpPage;
