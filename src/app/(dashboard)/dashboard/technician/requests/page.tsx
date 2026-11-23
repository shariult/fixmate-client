import React from "react";
import TechnicianRequestsTable from "./_components/TechnicianRequestsTable";
import TechnicianRequestsFilter from "./_components/TechnicianRequestsFilter";
import { listTechnicianBookingsAction } from "@/lib/bookingActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";

type TechnicianRequestsPageProps = {
  searchParams: Promise<{ status: string }>;
};

async function TechnicianRequestsPage(props: TechnicianRequestsPageProps) {
  const { status } = await props.searchParams;

  const resData = await listTechnicianBookingsAction(status);
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" />
      </Container>
    );
  }

  const requests = resData.data;
  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Manage Requests</h1>
        <p className="mt-1 text-muted">
          Only requests for your own services appear here. Each job moves
          forward one step at a time.
        </p>
      </div>

      <TechnicianRequestsFilter status={status} />

      <div className="mt-4 overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <TechnicianRequestsTable requests={requests} />
      </div>
    </main>
  );
}

export default TechnicianRequestsPage;
