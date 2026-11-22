import React from "react";
import AdminServicesTable from "./_components/AdminServicesTable";
import { getServicesAdminAction } from "@/lib/service/serviceActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";

async function AdminServices() {
  const resData = await getServicesAdminAction();
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

      {/* <!-- In Next.js default this list to ?status=pending (or sort pending first, as shown here) --> */}
      {/* <div className="mt-8 overflow-x-auto">
        <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
          <a href="?status=" className="tab h-10 gap-2 tab-active">
            All<span className="badge badge-sm badge-soft">16</span>
          </a>
          <a href="?status=pending" className="tab h-10 gap-2">
            Pending<span className="badge badge-sm badge-soft">3</span>
          </a>
          <a href="?status=approved" className="tab h-10 gap-2">
            Approved<span className="badge badge-sm badge-soft">12</span>
          </a>
          <a href="?status=rejected" className="tab h-10 gap-2">
            Rejected<span className="badge badge-sm badge-soft">1</span>
          </a>
        </div>
      </div> */}

      {/* <!-- Desktop / tablet: table (pending rows are tinted and listed first) --> */}
      <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-base-300 bg-base-50 md:block">
        <AdminServicesTable services={services} />
      </div>
    </main>
  );
}

export default AdminServices;
