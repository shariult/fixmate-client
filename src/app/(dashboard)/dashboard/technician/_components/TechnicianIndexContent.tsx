import React, { ComponentPropsWithoutRef } from "react";

type TechnicianIndexContentProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function TechnicianIndexContent(props: TechnicianIndexContentProps) {
  const { className, children, ...rest } = props;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="heading-2">Welcome back, Rafiq</h1>
          <p className="mt-1 text-muted">
            Your services and incoming jobs at a glance.
          </p>
        </div>
        <a
          href="dashboard-technician-add-service.html"
          className="btn btn-primary"
        >
          <svg className="size-4">
            <use href="#i-plus" />
          </svg>
          Add a service
        </a>
      </div>

      {/* <!-- Reusable <StatsCard /> (same component as the customer dashboard) --> */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total Services</p>
              <p className="mt-2 font-title text-3xl font-semibold">6</p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <svg className="size-5">
                <use href="#i-wrench" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Everything you&apos;ve listed
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Approved Services</p>
              <p className="mt-2 font-title text-3xl font-semibold">4</p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <svg className="size-5">
                <use href="#i-shield" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            Live on the public Services page
          </p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Pending Requests</p>
              <p className="mt-2 font-title text-3xl font-semibold">2</p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <svg className="size-5">
                <use href="#i-clipboard" />
              </svg>
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            New requests waiting for your answer
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <h2 className="heading-3">Jobs by status</h2>
          <ul className="mt-6 space-y-4">
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Requested</span>
                <span className="font-medium">2</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-info w-[40%]"></div>
              </div>
            </li>
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Accepted</span>
                <span className="font-medium">1</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-secondary w-[20%]"></div>
              </div>
            </li>
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>In Progress</span>
                <span className="font-medium">1</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-warning w-[20%]"></div>
              </div>
            </li>
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Completed</span>
                <span className="font-medium">5</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-success w-full"></div>
              </div>
            </li>
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Rejected</span>
                <span className="font-medium">1</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-error w-[20%]"></div>
              </div>
            </li>
            <li>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span>Cancelled</span>
                <span className="font-medium">1</span>
              </div>
              <div className="h-2.5 rounded-full bg-base-200">
                <div className="h-full rounded-full bg-base-300 w-[20%]"></div>
              </div>
            </li>
          </ul>
        </section>
        <section className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <h2 className="heading-3">Earnings by month</h2>
          <p className="mt-1 text-sm text-muted">
            Paid jobs only: $184 across 4 jobs
          </p>
          <div className="mt-6 flex h-44 items-end gap-3 border-b border-base-300">
            <div
              className="flex-1 rounded-t-md bg-base-200 h-[3%]"
              title="$0"
            ></div>
            <div
              className="flex-1 rounded-t-md bg-base-200 h-[3%]"
              title="$0"
            ></div>
            <div
              className="flex-1 rounded-t-md bg-base-200 h-[3%]"
              title="$0"
            ></div>
            <div
              className="flex-1 rounded-t-md bg-primary h-[54%]"
              title="$45"
            ></div>
            <div
              className="flex-1 rounded-t-md bg-primary h-full"
              title="$84"
            ></div>
            <div
              className="flex-1 rounded-t-md bg-primary h-[65%]"
              title="$55"
            ></div>
          </div>
          <div className="mt-2 flex gap-3">
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$0</p>
              <p className="text-xs text-muted">Jun</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$0</p>
              <p className="text-xs text-muted">Jul</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$0</p>
              <p className="text-xs text-muted">Aug</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$45</p>
              <p className="text-xs text-muted">Sep</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$84</p>
              <p className="text-xs text-muted">Oct</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xs font-medium">$55</p>
              <p className="text-xs text-muted">Nov</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <section className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <div className="flex items-center justify-between">
            <h2 className="heading-3">Requests waiting for you</h2>
            <a
              href="dashboard-technician-requests.html"
              className="btn btn-ghost btn-sm"
            >
              View all
            </a>
          </div>
          <ul className="mt-2 divide-y divide-base-300">
            <li className="flex items-center gap-3 py-3">
              <img
                src="https://placehold.co/80x80/dcfce7/166534?text=iPhone"
                alt=""
                className="size-11 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  iPhone Screen Replacement
                </p>
                <p className="truncate text-xs text-muted">
                  Rahim Uddin · 20 Nov 2026
                </p>
              </div>
              <a
                href="dashboard-technician-requests.html"
                className="btn btn-sm btn-outline"
              >
                Review
              </a>
            </li>
            <li className="flex items-center gap-3 py-3">
              <img
                src="https://placehold.co/80x80/dcfce7/166534?text=Samsung"
                alt=""
                className="size-11 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  Samsung Battery Replacement
                </p>
                <p className="truncate text-xs text-muted">
                  Sadia Rahman · 21 Nov 2026
                </p>
              </div>
              <a
                href="dashboard-technician-requests.html"
                className="btn btn-sm btn-outline"
              >
                Review
              </a>
            </li>
          </ul>
        </section>
        <section className="rounded-2xl border border-base-300 bg-base-50 p-6">
          <div className="flex items-center justify-between">
            <h2 className="heading-3">Service approvals</h2>
            <a
              href="dashboard-technician-my-services.html"
              className="btn btn-ghost btn-sm"
            >
              Manage
            </a>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-xl bg-base-100 px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="badge badge-soft badge-success">Approved</span>
                Live to customers
              </span>
              <span className="font-title text-lg font-semibold">4</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-base-100 px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="badge badge-soft badge-warning">Pending</span>
                Waiting for an admin
              </span>
              <span className="font-title text-lg font-semibold">1</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-base-100 px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="badge badge-soft badge-error">Rejected</span>
                Edit and resubmit
              </span>
              <span className="font-title text-lg font-semibold">1</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default TechnicianIndexContent;
