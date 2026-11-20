"use client";

import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { useRef } from "react";
import BookingModal from "./BookingModal";

type ServiceShowHeroRightProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function ServiceShowHeroRight(props: ServiceShowHeroRightProps) {
  const { className, elClassName, ...rest } = props;

  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <aside className="lg:col-span-1">
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
              onClick={() => modalRef.current?.showModal()}
            >
              Request Repair
            </button>
          </div>

          {/* Technician summary */}
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">About the technician</h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    src="https://placehold.co/112x112/4f46e5/ffffff?text=RH"
                    alt="Rafiq Hasan"
                  />
                </div>
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 font-title font-medium">
                  Rafiq Hasan
                  <svg className="size-4 text-primary">
                    <use href="#i-shield" />
                  </svg>
                </p>
                <p className="flex items-center gap-1.5 text-sm text-muted">
                  <svg className="size-3.5">
                    <use href="#i-map-pin" />
                  </svg>
                  Dhanmondi, Dhaka
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm/6 text-muted">
              Mobile repair specialist with 8 years of experience across iPhone
              and Samsung devices. Over 1,500 screens replaced.
            </p>
          </div>
        </div>
      </aside>
      <BookingModal modalRef={modalRef} service={{ id: "10" }} />
    </>
  );
}

export default ServiceShowHeroRight;
