import React, { ComponentPropsWithoutRef } from "react";
import Form from "next/form";
import Link from "next/link";
import Container from "@/components/ui/common/Container";
import { PiMagnifyingGlassBold } from "react-icons/pi";

type ServiceHeroProps = {
  urlQuery: URLSearchParams;
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function ServiceHero(props: ServiceHeroProps) {
  const { urlQuery, className, elClassName, ...rest } = props;

  return (
    <Container
      className={`${className ? className : ""}`}
      elClassName={`${elClassName ? elClassName : ""}`}
      spaceY="pt-30 pb-6"
      {...rest}
    >
      <h1 className="heading-2">Browse repair services</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Compare approved technicians by category, service type and price, then
        send a repair request in a minute.
      </p>

      {/* <!-- ===== Search + filters + sort ===== --> */}
      <Form
        action="/services"
        role="search"
        className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-12"
      >
        <label className="input w-full lg:col-span-4">
          <PiMagnifyingGlassBold className="text-xl" />
          <input
            type="search"
            name="search"
            placeholder="Search by title or category"
            defaultValue={urlQuery.get("search") ?? ""}
          />
        </label>

        <select
          name="category"
          className="select w-full lg:col-span-2"
          aria-label="Category"
          defaultValue={urlQuery.get("category") ?? ""}
        >
          <option value="">All categories</option>
          <option value={"smartphone"}>Smartphone</option>
          <option value={"laptop-and-pc"}>Laptop &amp; PC</option>
          <option value={"ac"}>AC</option>
          <option value={"refrigerator"}>Refrigerator</option>
          <option value={"tv"}>TV</option>
          <option value={"washing-machine"}>Washing Machine</option>
          <option value={"electrical"}>Electrical</option>
        </select>

        <select
          name="mode"
          className="select w-full lg:col-span-2"
          aria-label="Service mode"
          defaultValue={urlQuery.get("mode") ?? ""}
        >
          <option value="">Any service mode</option>
          <option value={"home-visit"}>Home Visit</option>
          <option value={"shop-drop-off"}>Shop Drop-off</option>
        </select>

        <select
          name="sort"
          className="select w-full lg:col-span-2"
          aria-label="Sort"
          defaultValue={urlQuery.get("sort") ?? ""}
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
      </Form>
    </Container>
  );
}

export default ServiceHero;
