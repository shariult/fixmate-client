import React from "react";
import { getTechnicianDashAction } from "@/lib/dashboardActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { getCurrentUser } from "@/lib/authActions";
import Link from "next/link";
import {
  PiClipboardBold,
  PiPlusBold,
  PiShieldCheckBold,
  PiWrenchBold,
} from "react-icons/pi";

async function TechnicianIndexPage() {
  const userData = await getCurrentUser();
  const resData = await getTechnicianDashAction();

  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" isError />
      </Container>
    );
  }

  const cUser = userData?.user;
  const data = resData.data;
  console.log(data);
  return (
    <main className={`flex-1 p-4 md:p-8`}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">Welcome back, {cUser?.name}</h1>
          <p className="mt-1 text-muted">
            Your services and incoming jobs at a glance.
          </p>
        </div>
        <Link
          href="/dashboard/technician/add-service"
          className="btn btn-primary"
        >
          <PiPlusBold className="text-lg" />
          Add a service
        </Link>
      </div>

      {/* <!-- Reusable <StatsCard /> (same component as the customer dashboard) --> */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Services</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.totalServices}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiWrenchBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Everything you&apos;ve listed
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Approved Services</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.approvedServices}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiShieldCheckBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Live on the public Services page
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Pending Requests</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.pendingRequests}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiClipboardBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            New requests waiting for your answer
          </p>
        </div>
      </div>
    </main>
  );
}

export default TechnicianIndexPage;
