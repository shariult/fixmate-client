import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";

function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-base-100">{children}</main>
    </>
  );
}

export default MainLayout;
