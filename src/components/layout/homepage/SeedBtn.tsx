"use client";

import authClient from "@/lib/authClient";
import { createDemoData } from "@/lib/dashboardActions";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";

type SeedBtnProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function SeedBtn(props: SeedBtnProps) {
  const { data } = authClient.useSession();
  const { className, children, ...rest } = props;
  async function seedHandler() {
    if (!data) {
      toast.error("Please login to seed the Database!");
      return;
    }
    const resData = await createDemoData();
    if (!resData.isSuccess) {
      toast.error("Could not seed database");
      return;
    }
    toast.success("Database seeded with dummy data");
  }
  return (
    <button
      className={`btn btn-link link-hover font-light px-2 ${className ? className : ""}`}
      onClick={seedHandler}
      {...rest}
    >
      Click here
    </button>
  );
}

export default SeedBtn;
