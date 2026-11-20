import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { PiHouseBold, PiSignOutBold, PiUserBold } from "react-icons/pi";
import CompanyLogo from "@/components/ui/common/CompanyLogo";
import { TSidebar } from "@/data/dashboardSidebar";
import DashboardAsideLink from "./DashboardAsideLink";
import UserSignOut from "@/components/ui/user/UserSignOut";

type DashboardAsideProps = {
  sidebarConfig: TSidebar;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function DashboardAside(props: DashboardAsideProps) {
  const { sidebarConfig, className, children, ...rest } = props;

  return (
    <div className={`drawer-side z-40 ${className ? className : ""}`} {...rest}>
      <label
        htmlFor="dash-drawer"
        aria-label="Close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="flex h-full w-64 flex-col border-r border-base-300 bg-base-50">
        <div className="flex h-16 items-center border-b border-base-300 px-5">
          <CompanyLogo href={"/"} />
        </div>
        <nav
          className="flex-1 overflow-y-auto p-3"
          aria-label={`${sidebarConfig.role} dashboard`}
        >
          <p className="px-3 pb-2 pt-3 text-xs font-medium text-muted capitalize">
            {sidebarConfig.role}
          </p>
          <ul className="menu w-full gap-1 p-0">
            {sidebarConfig.links.map((link) => {
              const Icon = link.icon;
              return (
                <DashboardAsideLink
                  key={link.id}
                  href={link.href}
                  label={link.label}
                  icon={<Icon className="text-xl" />}
                />
              );
            })}

            {children}

            {/* common */}
            <DashboardAsideLink
              href={"/dashboard/profile"}
              label="Update Profile"
              icon={<PiUserBold className="text-xl" />}
            />
          </ul>
        </nav>
        <div className="border-t border-base-300 p-3">
          <ul className="menu w-full gap-1 p-0">
            <li>
              <Link href="/">
                <PiHouseBold className="text-xl" />
                Back to Home
              </Link>
            </li>
            <li>
              <UserSignOut />
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default DashboardAside;
