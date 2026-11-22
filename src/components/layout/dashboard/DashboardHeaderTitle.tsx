"use client";

import {
  adminSidebarConfig,
  customerSidebarConfig,
  technicianSidebarConfig,
} from "@/data/dashboardSidebar";
import authClient from "@/lib/authClient";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";

type DashboardHeaderTitleProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function DashboardHeaderTitle(props: DashboardHeaderTitleProps) {
  const { className, children, ...rest } = props;

  const urlPath = usePathname();
  const { data, error, isPending } = authClient.useSession();
  if (error || isPending) {
    return (
      <p
        className={`font-title text-lg font-medium ${className ? className : ""}`}
        {...rest}
      >
        Dashboard
      </p>
    );
  }

  let sidebarConfig = customerSidebarConfig;
  if (data?.user.role === "technician") {
    sidebarConfig = technicianSidebarConfig;
  }
  if (data?.user.role === "admin") {
    sidebarConfig = adminSidebarConfig;
  }

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
