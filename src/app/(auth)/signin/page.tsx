import CompanyLogo from "@/components/ui/common/CompanyLogo";
import SocialSignIn from "@/components/ui/user/SocialSignIn";
import UserForm from "@/components/ui/user/UserForm";
import Link from "next/link";
import React from "react";
import {
  PiCheckBold,
  PiEyeBold,
  PiWarningBold,
  PiWrenchBold,
} from "react-icons/pi";

function SignInPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-gray-800 p-12 text-gray-50 lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute -bottom-28 -right-28 size-96 rounded-full bg-white/10 blur-3xl"></div>

        <CompanyLogo href={"/"} className="text-gray-50" />

        <div className="relative max-w-md text-gray-50">
          <h2 className="heading-2">
            Welcome back. Your repairs are right where you left them.
          </h2>
          <p className="mt-4 text-gray-400">
            Sign in to check job status, pay for completed repairs, or manage
            the requests waiting for you.
          </p>
          <ul className="mt-8 space-y-3 text-sm/6">
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              <span>See every job step by step</span>
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              <span>Pay only for completed work</span>
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary text-base" />
              <span>Technicians manage services and requests in one place</span>
            </li>
          </ul>
        </div>
        <p className="relative text-sm text-primary-content/70">
          &copy; 2026 FixMate
        </p>
      </aside>

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
