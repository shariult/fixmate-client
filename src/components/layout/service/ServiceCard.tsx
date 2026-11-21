import { categories, serviceModes } from "@/data/appData";
import { TService } from "@/types";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { PiMapPinBold, PiUserBold } from "react-icons/pi";

type ServiceCardProps = {
  service: TService;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"article">;

function ServiceCard(props: ServiceCardProps) {
  const { service, className, children, ...rest } = props;

  const category = categories.filter(
    (item) => service.category === item.slug,
  )[0];
  const { title: serviceModeTitle, icon: ServiceModeIcon } =
    serviceModes.filter((item) => service.serviceMode === item.slug)[0];

  return (
    <article
      className={`card h-full overflow-hidden border border-base-300 bg-base-50 transition-colors hover:border-primary/50 ${className ? className : ""}`}
      {...rest}
    >
      <Link href={`/services/${service._id}`}>
        <figure className="aspect-4/3 bg-base-200">
          <img
            src={service.image}
            alt={service.title}
            className="size-full object-cover"
            loading="lazy"
          />
        </figure>
      </Link>

      <div className="card-body gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="badge badge-soft badge-primary">
            {category.title}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted">
            <ServiceModeIcon />
            {serviceModeTitle}
          </span>
        </div>

        <h3 className="heading-3 line-clamp-2 min-h-14">
          <Link href={`/services/${service._id}`}>{service.title}</Link>
        </h3>

        <ul className="space-y-1.5 text-sm text-muted">
          <li className="flex items-center gap-2">
            <PiUserBold />
            <span className="truncate">{service.userDetails?.name}</span>
          </li>
          <li className="flex items-center gap-2">
            <PiMapPinBold />
            <span className="truncate">{service.serviceArea}</span>
          </li>
        </ul>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-base-300 pt-4">
          <p className="text-sm text-muted">
            From &nbsp;
            <span className="font-title text-xl font-semibold text-base-content">
              ${service.basePrice}
            </span>
          </p>

          <Link
            href={`/services/${service._id}`}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
