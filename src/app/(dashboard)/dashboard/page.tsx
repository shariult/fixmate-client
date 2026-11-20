import React from "react";
import { redirect } from "next/navigation";

function DashboardPage() {
  redirect("/dashboard/technician");
}

export default DashboardPage;
