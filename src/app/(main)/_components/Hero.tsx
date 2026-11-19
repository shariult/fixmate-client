import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import {
  PiDeviceMobileBold,
  PiMagnifyingGlassBold,
  PiShieldCheckBold,
  PiStarFill,
} from "react-icons/pi";

type HeroProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function Hero(props: HeroProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      el={"header"}
      className={`grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-24 relative ${className ? className : ""}`}
      elClassName={`overflow-hidden ${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div>
        <p className="heading-sub">Device &amp; appliance repair</p>
        <h1 className="heading-1 mt-4">
          Broken device? Get it fixed by verified technicians.
        </h1>
        <p className="mt-5 max-w-xl text-lg/8 text-muted">
          Book a technician, follow the job from request to completion, and pay
          online only after the work is delivered.
        </p>

        {/* <!-- Search → GET /services?search=... --> */}
        <form
          action="services.html"
          method="get"
          className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label className="input input-lg w-full">
            <PiMagnifyingGlassBold />
            <input
              type="search"
              name="search"
              placeholder='Try "AC servicing" or "laptop"'
            />
          </label>
          <button type="submit" className="btn btn-primary btn-lg">
            Find a service
          </button>
        </form>

        <dl className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-base-300 pt-6">
          <div>
            <dt className="text-sm text-muted">Verified technicians</dt>
            <dd className="mt-1 font-title text-2xl font-semibold">250+</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Jobs completed</dt>
            <dd className="mt-1 font-title text-2xl font-semibold">12,000+</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Paid before work</dt>
            <dd className="mt-1 font-title text-2xl font-semibold">Never</dd>
          </div>
        </dl>
      </div>

      {/* <!-- Hero visual: a live "job tracker" card — the product's core idea --> */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-3 -rotate-2 rounded-3xl bg-primary/10"></div>
        <div className="relative rounded-2xl border border-base-300 bg-base-50 p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiDeviceMobileBold className="text-2xl" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-title text-lg font-medium">
                iPhone 14 screen replacement
              </p>
              <p className="text-sm text-muted">
                Job #FM-1042 · Dhanmondi, Dhaka
              </p>
            </div>
            <span className="badge badge-soft badge-warning">In Progress</span>
          </div>

          <ul className="steps mt-8 w-full text-xs">
            <li className="step step-primary">Requested</li>
            <li className="step step-primary">Accepted</li>
            <li className="step step-primary">In Progress</li>
            <li className="step">Completed</li>
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-xl bg-base-100 p-3">
            <div className="avatar avatar-placeholder">
              <div className="w-10 rounded-full bg-secondary text-secondary-content">
                <span className="text-sm">RH</span>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Rafiq Hasan</p>
              <p className="flex items-center gap-1 text-xs text-muted">
                <PiStarFill />
                4.9 · Verified technician
              </p>
            </div>
            <p className="font-title text-lg font-semibold">$49</p>
          </div>
          <p className="mt-4 text-center text-xs text-muted">
            Pay Now unlocks only after the technician marks the job completed.
          </p>
        </div>

        <div className="absolute -left-4 bottom-10 hidden items-center gap-2 rounded-xl border border-base-300 bg-base-50 px-3 py-2 text-sm shadow-lg sm:flex">
          <PiShieldCheckBold className="text-primary text-lg" />
          Identity-checked
        </div>
      </div>
    </Container>
  );
}

export default Hero;
