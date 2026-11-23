import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/authActions";

async function CustomerDashboardLayout({ children }: LayoutProps<"/">) {
  const session = await getCurrentUser();
  if (session?.user.role !== "customer") {
    redirect("/");
  }
  return <>{children}</>;
}

export default CustomerDashboardLayout;
