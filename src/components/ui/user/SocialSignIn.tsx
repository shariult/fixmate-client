"use client";

import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";
import { GoogleSvg } from "../common/SVGIcons";
import authClient from "@/lib/authClient";

type SocialSignInProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function SocialSignIn(props: SocialSignInProps) {
  const { className, children, ...rest } = props;

  async function socialSignInHandler(provider: string) {
    const { data, error } = await authClient.signIn.social({
      provider,
    });
    if (error) {
      toast.error(error.message ?? "Something went wrong!");
      return;
    }
    toast.loading(`Redirecting to ${provider.toUpperCase()}!`);
  }
  return (
    <button
      className={`btn btn-outline ${className ? className : ""}`}
      onClick={() => {
        socialSignInHandler("google");
      }}
      {...rest}
    >
      <GoogleSvg className="w-4" />
      Continue with Google
    </button>
  );
}

export default SocialSignIn;
