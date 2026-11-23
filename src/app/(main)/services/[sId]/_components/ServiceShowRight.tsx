"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { useRef } from "react";
import Image from "next/image";
import { PiMapPinBold, PiShieldCheckBold } from "react-icons/pi";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import authClient from "@/lib/authClient";
import BookingModal from "./BookingModal";
import BookingModalInfo from "./BookingModalInfo";
import { TService } from "@/types";
import { useRouter } from "next/navigation";

type ServiceShowRightProps = {
  service: TService;
  className?: string;
} & ComponentPropsWithoutRef<"aside">;

function ServiceShowRight(props: ServiceShowRightProps) {
  const { data } = authClient.useSession();
  const router = useRouter();
  const { service, className, ...rest } = props;
  const modalRef = useRef<HTMLDialogElement>(null);

  function requestRepairHandler() {
    if (data) {
      modalRef.current?.showModal();
    } else {
      router.push("/signin?toast=auth");
    }
  }

  return (
    <>
      <aside
        className={`lg:col-span-1 ${className ? className : ""}`}
        {...rest}
      >
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <p className="text-sm text-muted">Starting from</p>
            <p className="font-title text-4xl font-semibold">$49</p>
            <p className="mt-1 text-xs text-muted">
              Final amount is set by the technician after the job.
            </p>

            {/* Logged-in CUSTOMER → opens modal.
                    Logged-out: render <Link href="/sign-in" className="btn btn-primary btn-block mt-6">.
                    Technician/admin: render the same button with `disabled` plus an info alert. */}
            <button
              type="button"
              className="btn btn-primary btn-block mt-6"
              onClick={requestRepairHandler}
            >
              Request Repair
            </button>
          </div>

          {/* Technician summary */}
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">About the technician</h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="avatar">
                {/* <div className="w-14 rounded-full">
                  
                </div> */}
                {service?.userDetails?.image ? (
                  <Image
                    alt={service.userDetails.name.slice(0, 15)}
                    src={service.userDetails.image}
                    width="60"
                    height="60"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserDemoImg name={service?.userDetails?.name ?? "U"} />
                )}
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-title font-medium">
                  {service?.userDetails?.name}
                  <PiShieldCheckBold className="text-xl text-primary" />
                </p>
                {service?.userDetails?.address && (
                  <p className="flex items-center gap-1.5 text-sm text-muted">
                    <PiMapPinBold />
                    {service.userDetails.address}
                  </p>
                )}
              </div>
            </div>
            {service?.userDetails?.bio && (
              <p className="mt-4 text-sm/6 text-muted">
                {service.userDetails.bio}
              </p>
            )}
          </div>
        </div>
      </aside>

      {data?.user && data.user.role === "customer" && (
        <BookingModal modalRef={modalRef} service={service} user={data.user} />
      )}
      {data?.user && data.user.role !== "customer" && (
        <BookingModalInfo
          modalRef={modalRef}
          message="Please sign up as a customer to book this service."
        />
      )}
    </>
  );
}

export default ServiceShowRight;
