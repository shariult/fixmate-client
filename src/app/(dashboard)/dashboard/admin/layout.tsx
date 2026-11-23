import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/authActions";

async function AdminDashboardLayout({ children }: LayoutProps<"/">) {
  const session = await getCurrentUser();
  if (session?.user.role !== "admin") {
    redirect("/");
  }
  return <>{children}</>;
}

export default AdminDashboardLayout;
