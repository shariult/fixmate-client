import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/authActions";

async function TechnicianDashboardLayout({ children }: LayoutProps<"/">) {
  const session = await getCurrentUser();
  if (session?.user.role !== "technician") {
    redirect("/");
  }
  return <>{children}</>;
}

export default TechnicianDashboardLayout;
