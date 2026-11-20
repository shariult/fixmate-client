import ThemeToggle from "@/components/ui/common/ThemeToggle";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { PiListBold, PiSignOutBold, PiUserBold } from "react-icons/pi";
import DashboardHeaderTitle from "./DashboardHeaderTitle";
import { TSidebar } from "@/data/dashboardSidebar";

type DashboardNavProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function DashboardNav(props: DashboardNavProps) {
  const { className, children, ...rest } = props;

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-base-300 bg-base-50/90 px-4 backdrop-blur md:px-8"
      {...rest}
    >
      <label
        htmlFor="dash-drawer"
        className="btn btn-ghost btn-square lg:hidden"
        aria-label="Toggle sidebar"
      >
        <PiListBold />
      </label>

      <DashboardHeaderTitle />

      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        {/* <Link
          href="index.html"
          className="btn btn-ghost btn-sm hidden sm:inline-flex"
        >
          <svg className="size-4">
            <use href="#i-home" />
          </svg>
          Back to Home
        </Link> */}
        <ThemeToggle />

        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="flex items-center gap-3 rounded-full py-1 pl-1 pr-1 hover:bg-base-200 sm:pr-3"
            aria-label="Account menu"
          >
            <div className="avatar">
              <div className="w-9 rounded-full ring-2 ring-primary/30">
                <img
                  src="https://placehold.co/72x72/4f46e5/ffffff?text=RH"
                  alt="Rafiq Hasan"
                />
              </div>
            </div>

            <div className="hidden text-left leading-tight sm:block">
              <p className="text-sm font-medium">Rafiq Hasan</p>
              <p className="text-xs text-muted">Technician</p>
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-52 gap-0.5 rounded-box border border-base-300 bg-base-50 p-2 shadow-lg"
          >
            <li>
              <Link href="/dashboard/profile">
                <PiUserBold />
                Update Profile
              </Link>
            </li>
            <li>
              <button type="button" className="text-error">
                <PiSignOutBold />
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default DashboardNav;
