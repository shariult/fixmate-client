import React, { ComponentPropsWithoutRef } from "react";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import { PiCheckBold } from "react-icons/pi";

type SignInAsideProps = {
  className?: string;
} & ComponentPropsWithoutRef<"section">;

function SignInAside(props: SignInAsideProps) {
  const { className, ...rest } = props;

  return (
    <aside
      className={`relative hidden overflow-hidden bg-gray-800 p-12 text-gray-50 lg:flex lg:flex-col lg:justify-between ${className ? className : ""}`}
      {...rest}
    >
      <div className="pointer-events-none absolute -bottom-28 -right-28 size-96 rounded-full bg-white/10 blur-3xl"></div>

      <CompanyLogo href={"/"} className="text-gray-50" />

      <div className="relative max-w-md text-gray-50">
        <h2 className="heading-2">
          Welcome back. Your repairs are right where you left them.
        </h2>
        <p className="mt-4 text-gray-400">
          Sign in to check job status, pay for completed repairs, or manage the
          requests waiting for you.
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
  );
}

export default SignInAside;
