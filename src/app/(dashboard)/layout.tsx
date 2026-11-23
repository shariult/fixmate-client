import React, { Suspense } from "react";
import DashboardAside from "@/components/layout/dashboard/DashboardAside";
import DashboardNav from "@/components/layout/dashboard/DashboardNav";

function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex min-h-screen min-w-0 flex-col">
        <DashboardNav />
        {children}
      </div>
      <DashboardAside />
    </div>
  );
}

export default DashboardLayout;
