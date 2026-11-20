import React from "react";
import Link from "next/link";
import {
  PiCheckBold,
  PiDeviceMobileBold,
  PiEyeBold,
  PiWrenchBold,
} from "react-icons/pi";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import FormGroup from "@/components/ui/form/FormGroup";
import UserForm from "@/components/ui/user/UserForm";
import SocialSignIn from "@/components/ui/user/SocialSignIn";

function SignUpPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-gray-800 p-12 text-gray-50 lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute -bottom-28 -right-28 size-96 rounded-full bg-white/10 blur-3xl"></div>

        <CompanyLogo href={"/"} className="text-gray-50" />

        <div className="relative max-w-md">
          <h2 className="heading-2">
            Repairs you can follow, and pay for at the end.
          </h2>
          <p className="mt-4 text-gray-300">
            Create a free account to book verified technicians, or to list your
            own repair services.
          </p>
          <ul className="mt-8 space-y-3 text-sm/6">
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary" />
              <span>Every service is approved by an admin</span>
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary" />
              <span>Track each job from request to completion</span>
            </li>
            <li className="flex gap-3 items-center">
              <PiCheckBold className="text-primary" />
              <span>Pay securely only after the work is done</span>
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
            {/* <!-- OPTIONAL: Google login (BetterAuth social provider; Google users get role "customer") --> */}
            {/* <button type="button" className="btn btn-outline btn-block">
              <span className="grid size-5 place-items-center rounded-full border border-base-300 text-xs font-semibold">
                G
              </span>
              Continue with Google
            </button> */}
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
