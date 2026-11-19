import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";

function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] bg-base-100">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
