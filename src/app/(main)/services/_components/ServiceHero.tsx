import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import Link from "next/link";
import { PiMagnifyingGlass, PiMagnifyingGlassBold } from "react-icons/pi";

type ServiceHeroProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function ServiceHero(props: ServiceHeroProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      {...rest}
    >
      <h1 className="heading-2">Browse repair services</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Compare approved technicians by category, service type and price, then
        send a repair request in a minute.
      </p>

      {/* <!-- ===== Search + filters + sort ===== --> */}
      <form
        action="/services"
        method="get"
        className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-12"
      >
        <label className="input w-full lg:col-span-4">
          <PiMagnifyingGlassBold className="text-xl" />
          <input
            type="search"
            name="search"
            placeholder="Search by title or category"
          />
        </label>

        <select
          name="category"
          className="select w-full lg:col-span-2"
          aria-label="Category"
        >
          <option value="">All categories</option>
          <option>Smartphone</option>
          <option>Laptop &amp; PC</option>
          <option>AC</option>
          <option>Refrigerator</option>
          <option>TV</option>
          <option>Washing Machine</option>
          <option>Electrical</option>
        </select>

        <select
          name="mode"
          className="select w-full lg:col-span-2"
          aria-label="Service mode"
        >
          <option value="">Any service mode</option>
          <option>Home Visit</option>
          <option>Shop Drop-off</option>
        </select>

        <select
          name="sort"
          className="select w-full lg:col-span-2"
          aria-label="Sort"
        >
          <option value="newest">Newest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>

        <div className="flex gap-2 lg:col-span-2">
          <button type="submit" className="btn btn-primary flex-1">
            Apply
          </button>
          <Link href="/services" className="btn btn-ghost">
            Reset
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default ServiceHero;
