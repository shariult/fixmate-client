import React from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/authActions";

async function DashboardPage() {
  const userData = await getCurrentUser();

  if (!userData) {
    redirect("/");
  }

  redirect(`/dashboard/${userData.user.role}`);
}

export default DashboardPage;
