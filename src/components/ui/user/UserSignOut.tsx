"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
import { PiSignOutBold } from "react-icons/pi";
import authClient from "@/lib/authClient";

type UserSignOutProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function UserSignOut(props: UserSignOutProps) {
  const { className, children, ...rest } = props;
  const router = useRouter();

  async function signOutHandler() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      className={`text-error text-base ${className ? className : ""}`}
      onClick={signOutHandler}
      {...rest}
    >
      <PiSignOutBold />
      Sign Out
    </button>
  );
}

export default UserSignOut;
