import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type TechnicianRequestsFilterProps = {
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function TechnicianRequestsFilter(props: TechnicianRequestsFilterProps) {
  const { className, ...rest } = props;

  return (
    <div className="mt-8 overflow-x-auto" {...rest}>
      <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
        <a href="?status=" className="tab h-10 gap-2 tab-active">
          All<span className="badge badge-sm badge-soft">11</span>
        </a>
        <a href="?status=requested" className="tab h-10 gap-2">
          Requested<span className="badge badge-sm badge-soft">2</span>
        </a>
        <a href="?status=accepted" className="tab h-10 gap-2">
          Accepted<span className="badge badge-sm badge-soft">1</span>
        </a>
        <a href="?status=in-progress" className="tab h-10 gap-2">
          In Progress<span className="badge badge-sm badge-soft">1</span>
        </a>
        <a href="?status=completed" className="tab h-10 gap-2">
          Completed<span className="badge badge-sm badge-soft">5</span>
        </a>
      </div>
    </div>
  );
}

export default TechnicianRequestsFilter;
