import React from "react";
import DashboardAside from "@/components/layout/dashboard/DashboardAside";
import DashboardNav from "@/components/layout/dashboard/DashboardNav";
import {
  adminSidebarConfig,
  technicianSidebarConfig,
  customerSidebarConfig,
} from "@/data/dashboardSidebar";
import { getCurrentUser } from "@/lib/authActions";

async function DashboardLayout({ children }: LayoutProps<"/">) {
  const session = await getCurrentUser();
  let sidebarConfig = customerSidebarConfig;

  if (session?.user.role === "technician") {
    sidebarConfig = technicianSidebarConfig;
  }

  if (session?.user.role === "admin") {
    sidebarConfig = adminSidebarConfig;
  }

  console.log(session?.user);
  return (
    <div className="drawer lg:drawer-open">
      <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-screen min-w-0 flex-col">
        <DashboardNav />
        {children}
      </div>
      <DashboardAside sidebarConfig={sidebarConfig} />
    </div>
  );
}

export default DashboardLayout;
