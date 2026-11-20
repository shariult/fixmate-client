"use client";

import { technicianSidebarConfig, TSideLink } from "@/data/dashboardSidebar";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";

type DashboardHeaderTitleProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function DashboardHeaderTitle(props: DashboardHeaderTitleProps) {
  const { className, children, ...rest } = props;
  const urlPath = usePathname();

  let sidebarConfig = technicianSidebarConfig;

  let title = sidebarConfig.links.filter((link) => link.href === urlPath)[0]
    ?.label;
  if (!title && urlPath === "/dashboard/profile") {
    title = "Profile";
  }

  return (
    <p
      className={`font-title text-lg font-medium ${className ? className : ""}`}
      {...rest}
    >
      {title ? title : "Dashboard"}
    </p>
  );
}

export default DashboardHeaderTitle;
