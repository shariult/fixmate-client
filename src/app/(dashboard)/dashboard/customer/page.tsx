import React from "react";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { getCustomerDashAction } from "@/lib/dashboardActions";
import { getCurrentUser } from "@/lib/authActions";
import {
  PiCheckBold,
  PiClipboardBold,
  PiMagnifyingGlassBold,
  PiWrenchBold,
} from "react-icons/pi";
import Link from "next/link";

async function CustomerIndexPage() {
  const userData = await getCurrentUser();
  const resData = await getCustomerDashAction();
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData />
      </Container>
    );
  }

  const cUser = userData?.user;
  const data = resData.data;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">Welcome back, {cUser?.name}</h1>
          <p className="mt-1 text-muted">
            Here's where your repairs stand today.
          </p>
        </div>
        <Link href="/services" className="btn btn-primary">
          <PiMagnifyingGlassBold className="text-lg" />
          Find a service
        </Link>
      </div>

      {/* <!-- Reusable <StatsCard icon label value hint /> --> */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Requests</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.total}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiClipboardBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            All repair requests you've sent
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Active Jobs</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.active}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiWrenchBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Requested, accepted or in progress
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Completed Jobs</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.completed}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiCheckBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Includes 1 waiting for payment
          </p>
        </div>
      </div>
    </main>
  );
}

export default CustomerIndexPage;
