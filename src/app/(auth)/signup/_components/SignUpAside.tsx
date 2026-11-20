import React, { ComponentPropsWithoutRef } from "react";
import { PiCheckBold } from "react-icons/pi";
import CompanyLogo from "@/components/ui/common/CompanyLogo";

type SignUpAsideProps = {
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

function SignUpAside(props: SignUpAsideProps) {
  const { className, ...rest } = props;

  return (
    <aside
      className={`relative hidden overflow-hidden bg-gray-800 p-12 text-gray-50 lg:flex lg:flex-col lg:justify-between ${className ? className : ""}`}
      {...rest}
    >
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
  );
}

export default SignUpAside;
