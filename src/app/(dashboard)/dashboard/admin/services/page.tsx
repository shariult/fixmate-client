import React from "react";
import Link from "next/link";
import AdminServicesTable from "./_components/AdminServicesTable";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { listServicesAdminAction } from "@/lib/adminActions";

type AdminServicesProps = {
  searchParams: Promise<{ status: string }>;
};

async function AdminServices(props: AdminServicesProps) {
  const { status } = await props.searchParams;

  const resData = await listServicesAdminAction(status);
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" />
      </Container>
    );
  }

  const services = resData.data;
  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Service Approval</h1>
        <p className="mt-1 text-muted">
          Only approved and available services appear on the public Services
          page.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto">
        <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
          <Link
            href="?status="
            className={`tab h-10 gap-2 ${!status && "tab-active"}`}
          >
            All
          </Link>
          <Link
            href="?status=pending"
            className={`tab h-10 gap-2 ${status === "pending" && "tab-active"}`}
          >
            Pending
          </Link>
          <Link
            href="?status=approved"
            className={`tab h-10 gap-2 ${status === "approved" && "tab-active"}`}
          >
            Approved
          </Link>
          <Link
            href="?status=rejected"
            className={`tab h-10 gap-2 ${status === "rejected" && "tab-active"}`}
          >
            Rejected
          </Link>
        </div>
      </div>

      {/* <!-- Desktop / tablet: table (pending rows are tinted and listed first) --> */}
      <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-base-300 bg-base-50 md:block">
        <AdminServicesTable services={services} />
      </div>
    </main>
  );
}

export default AdminServices;
