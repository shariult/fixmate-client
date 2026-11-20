import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiListBold, PiUserBold } from "react-icons/pi";
import ThemeToggle from "@/components/ui/common/ThemeToggle";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import UserSignOut from "@/components/ui/user/UserSignOut";
import { getCurrentUser } from "@/lib/authActions";
import DashboardHeaderTitle from "./DashboardHeaderTitle";

type DashboardNavProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"header">;

async function DashboardNav(props: DashboardNavProps) {
  const { className, children, ...rest } = props;
  const userData = await getCurrentUser();

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
        <ThemeToggle />

        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="flex items-center gap-3 rounded-full py-1 pl-1 pr-1 hover:bg-base-200 sm:pr-3"
            aria-label="Account menu"
          >
            <div className="avatar">
              <div className="w-9 rounded-full ring-2 ring-primary/30">
                {userData?.user.image ? (
                  <Image
                    alt={userData?.user.name}
                    src={userData?.user.image}
                    width="40"
                    height="40"
                  />
                ) : (
                  <UserDemoImg name={userData?.user.name ?? "U"} />
                )}
              </div>
            </div>

            <div className="hidden text-left leading-tight sm:block">
              <p className="text-sm font-medium">
                {userData?.user.name.slice(0, 15)}
              </p>
              <p className="text-xs text-muted capitalize">
                {userData?.user.role}
              </p>
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
              <UserSignOut />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default DashboardNav;
