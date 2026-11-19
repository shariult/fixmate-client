import CompanyLogo from "@/components/ui/common/CompanyLogo";
import Link from "next/link";
import React from "react";
import {
  PiCheckBold,
  PiDeviceMobileBold,
  PiEyeBold,
  PiWrenchBold,
} from "react-icons/pi";

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
            <button type="button" className="btn btn-outline btn-block">
              <span className="grid size-5 place-items-center rounded-full border border-base-300 text-xs font-semibold">
                G
              </span>
              Continue with Google
            </button>
            <div className="divider my-6 text-xs text-muted">
              or use your email
            </div>
          </div>

          <form
            id="signup-form"
            className="space-y-5"
            action="#"
            method="post"
            noValidate
          >
            {/* <!-- Role selection (admin is intentionally not an option) --> */}
            <fieldset>
              <legend className="fieldset-legend">I want to join as</legend>
              <div className="mt-1 grid grid-cols-2 gap-3">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="h-full rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                    <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <PiDeviceMobileBold className="text-2xl" />
                    </span>
                    <p className="mt-3 font-title font-medium">Customer</p>
                    <p className="mt-0.5 text-xs/5 text-muted">
                      I need something repaired
                    </p>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="technician"
                    className="peer sr-only"
                  />
                  <div className="h-full rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                    <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <PiWrenchBold className="text-2xl" />
                    </span>
                    <p className="mt-3 font-title font-medium">Technician</p>
                    <p className="mt-0.5 text-xs/5 text-muted">
                      I repair and list services
                    </p>
                  </div>
                </label>
              </div>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Full name</legend>
              <input
                type="text"
                id="name"
                name="name"
                className="input w-full"
                placeholder="Rahim Uddin"
                autoComplete="name"
              />
              <p className="mt-1 hidden text-xs text-error" data-error="name">
                Please enter your full name.
              </p>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                id="email"
                name="email"
                className="input w-full"
                placeholder="you@example.com"
                autoComplete="email"
              />
              <p className="mt-1 hidden text-xs text-error" data-error="email">
                Please enter a valid email address.
              </p>
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <label className="input w-full">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  id="toggle-pw"
                  className="text-muted hover:text-base-content"
                  aria-label="Show password"
                >
                  <PiEyeBold className="text-base" />
                </button>
              </label>

              <ul className="mt-2 space-y-1 text-xs text-muted">
                <li data-rule="len" className="flex items-center gap-2">
                  <PiCheckBold />
                  At least 6 characters
                </li>
                <li data-rule="upper" className="flex items-center gap-2">
                  <PiCheckBold />
                  One uppercase letter
                </li>
                <li data-rule="lower" className="flex items-center gap-2">
                  <PiCheckBold />
                  One lowercase letter
                </li>
              </ul>
              <p
                className="mt-1 hidden text-xs text-error"
                data-error="password"
              >
                Your password does not meet all the requirements.
              </p>
            </fieldset>

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Create account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SignUpPage;
