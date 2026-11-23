import React from "react";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import SocialSignIn from "@/components/ui/user/SocialSignIn";
import UserForm from "@/components/ui/user/UserForm";
import Link from "next/link";
import { PiWarningBold, PiWrenchBold } from "react-icons/pi";
import SignInAside from "./_components/SignInAside";
import { getCurrentUser } from "@/lib/authActions";
import { redirect } from "next/navigation";

async function SignInPage() {
  const session = await getCurrentUser();
  if (session) {
    redirect("/");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <SignInAside />

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
          <h1 className="heading-2">Sign in</h1>
          <p className="mt-2 text-muted">
            New to FixMate?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Create an account
            </Link>
          </p>

          <div className="mt-8">
            {/* <!-- OPTIONAL: Google login (BetterAuth social provider; Google users get role "customer") --> */}
            <SocialSignIn className="w-full" />
            <div className="divider my-6 text-xs text-muted">
              or use your email
            </div>
          </div>

          {/* <!-- Shown after a failed attempt (or use a sonner toast) --> */}
          <div
            role="alert"
            className="alert alert-soft alert-error mb-5 hidden text-sm"
          >
            <PiWarningBold />
            <span>Incorrect email or password. Please try again.</span>
          </div>

          <UserForm type="signin" />
        </div>
      </main>
    </div>
  );
}

export default SignInPage;
