"use client";

import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiUserCircle, PiSignOut, PiChartBar } from "react-icons/pi";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import ThemeToggle from "@/components/ui/common/ThemeToggle";
import Loading from "@/components/ui/common/Loading";
import authClient from "@/lib/authClient";
import { useRouter } from "next/navigation";

type NavEndProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function NavEnd(props: NavEndProps) {
  const { className, ...rest } = props;
  const { data, isPending, error } = authClient.useSession();
  const router = useRouter();

  async function signOutHandler() {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  }

  if (isPending) {
    return (
      <div className="navbar-end">
        <Loading className="flex gap-2 items-center" />
      </div>
    );
  }

  if (!data && !isPending) {
    return (
      <div className={`navbar-end ${className ? className : ""}`} {...rest}>
        <ThemeToggle />
        <div className={`flex sm:flex-nowrap gap-1`}>
          <Link href="/signup" className="btn btn-ghost btn-sm md:btn-md">
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="btn btn-sm md:btn-md bg-primary text-primary-content hover:bg-primary-hover"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isPending && data && (
        <div className={`navbar-end ${className ? className : ""}`} {...rest}>
          <ThemeToggle />

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost avatar">
              <div className="w-10 rounded-full">
                {(!data?.user.image ||
                  !data?.user.image.startsWith("https://")) && (
                  <UserDemoImg name={data?.user.name ?? "U"} />
                )}
                {data?.user.image &&
                  data?.user.image.startsWith("https://") && (
                    <Image
                      alt="Tailwind CSS Navbar component"
                      src={data?.user.image}
                      width="40"
                      height="40"
                    />
                  )}
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 px-2 py-3 shadow"
            >
              <li className="mb-2 rounded-lg">
                <span className="text-xl py-0 hover:bg-base-200 hover:cursor-auto">
                  {data?.user.name}
                </span>
                <span className="-mt-1 text-muted text-right hover:bg-base-200 hover:cursor-auto">
                  {data?.user.email}
                </span>
              </li>

              <li>
                <Link href="/dashboard" className="text-base">
                  <PiChartBar /> Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/profile" className="text-base">
                  <PiUserCircle /> My Profile
                </Link>
              </li>
              <li>
                <button
                  className="text-base text-red-500"
                  onClick={signOutHandler}
                >
                  <PiSignOut /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavEnd;
