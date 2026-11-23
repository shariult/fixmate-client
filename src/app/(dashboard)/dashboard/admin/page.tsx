import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { getCurrentUser } from "@/lib/authActions";
import { getAdminDashAction } from "@/lib/dashboardActions";
import Link from "next/link";
import React from "react";
import {
  PiCreditCardBold,
  PiShieldCheckBold,
  PiUsersBold,
  PiWrenchBold,
} from "react-icons/pi";

async function AdminIndexPage() {
  const userData = await getCurrentUser();
  const resData = await getAdminDashAction();

  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" isError />
      </Container>
    );
  }

  const cUser = userData?.user;
  const data = resData.data;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">Platform overview</h1>
          <p className="mt-1 text-muted">
            Users, services and money moving through FixMate.
          </p>
        </div>
        <Link href="/dashboard/admin/services" className="btn btn-primary">
          Review pending services
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Users</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.totalUsers}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiUsersBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Customers, technicians and admins
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Technicians</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.totalTechnicians}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiWrenchBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">Offering repair services</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Pending Services</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {data.pendingServices}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiShieldCheckBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">Waiting for your approval</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Revenue</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                ${data.totalRevenue}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiCreditCardBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            From 4 paid jobs (Stripe test mode)
          </p>
        </div>
      </div>
    </main>
  );
}

export default AdminIndexPage;
