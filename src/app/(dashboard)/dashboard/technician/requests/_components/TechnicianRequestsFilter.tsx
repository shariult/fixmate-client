import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import Link from "next/link";

type TechnicianRequestsFilterProps = {
  status: undefined | string;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function TechnicianRequestsFilter(props: TechnicianRequestsFilterProps) {
  const { status, className, ...rest } = props;

  return (
    <div className="mt-8 overflow-x-auto" {...rest}>
      <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
        <Link
          href="?status="
          className={`tab h-10 gap-2  ${!status && "tab-active"}`}
        >
          All
        </Link>
        <Link
          href="?status=requested"
          className={`tab h-10 gap-2 ${status === "requested" && "tab-active"}`}
        >
          Requested
        </Link>
        <Link
          href="?status=accepted"
          className={`tab h-10 gap-2 ${status === "accepted" && "tab-active"}`}
        >
          Accepted
        </Link>
        <Link
          href="?status=in-progress"
          className={`tab h-10 gap-2 ${status === "in-progress" && "tab-active"}`}
        >
          In Progress
        </Link>
        <Link
          href="?status=completed"
          className={`tab h-10 gap-2 ${status === "completed" && "tab-active"}`}
        >
          Completed
        </Link>
      </div>
    </div>
  );
}

export default TechnicianRequestsFilter;
