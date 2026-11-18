import React from "react";

function DashboardLayout({ children }: LayoutProps<"/">) {
  return <main className="min-h-[60vh] bg-base-100">{children}</main>;
}

export default DashboardLayout;
