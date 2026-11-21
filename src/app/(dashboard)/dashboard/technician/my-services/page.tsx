import React from "react";
import MyServicesTable from "./_components/MyServiceTable";
import MyServicesMobileCards from "./_components/MyServiceMobileCards";
import { PiPlusBold } from "react-icons/pi";
import Link from "next/link";
import { getMyServicesAction } from "@/lib/service/serviceActions";
import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";

async function MyServicesPage() {
  const resData = await getMyServicesAction();

  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="No services found!" />
      </Container>
    );
  }
  const myServices = resData.data;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">My Services</h1>
          <p className="mt-1 text-muted">
            6 services. Only approved and available ones appear publicly.
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

      {/* <!-- Desktop / tablet: table --> */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <MyServicesTable myServices={myServices} />
      </div>

      {/* <!-- Mobile: cards --> */}
      {/* <MyServicesMobileCards /> */}
    </main>
  );
}

export default MyServicesPage;
