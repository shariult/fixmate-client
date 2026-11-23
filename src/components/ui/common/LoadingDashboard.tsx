import Container from "./Container";

type LoadingDashboardVariant = "overview" | "table" | "form";

type LoadingDashboardProps = {
  variant?: LoadingDashboardVariant;
  hideHeader?: boolean;
  className?: string;
};

const cx = (...parts: Array<string | false | undefined>) =>
  parts.filter(Boolean).join(" ");

function Bone({ className }: { className?: string }) {
  return <div className={cx("skeleton", className)} />;
}

function HeaderSkeleton() {
  return (
    <div>
      <Bone className="h-9 w-64 max-w-full" />
      <Bone className="mt-3 h-4 w-80 max-w-full" />
    </div>
  );
}

function StatsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-base-300 bg-base-50 p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <Bone className="h-4 w-24" />
              <Bone className="mt-3 h-8 w-16" />
            </div>
            <Bone className="size-11 shrink-0 rounded-xl" />
          </div>
          <Bone className="mt-4 h-3 w-40 max-w-full" />
        </div>
      ))}
    </div>
  );
}

const BAR_HEIGHTS = [40, 65, 30, 80, 55, 90];

function ChartSkeleton() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
      <Bone className="h-6 w-44" />
      <div className="mt-6 flex h-44 items-end gap-3 border-b border-base-300">
        {BAR_HEIGHTS.map((h, i) => (
          <Bone key={i} className="flex-1 rounded-b-none" />
        ))}
      </div>
    </div>
  );
}

function ChartSkeletonSized() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
      <Bone className="h-6 w-44" />
      <div className="mt-6 flex h-44 items-end gap-3 border-b border-base-300">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="skeleton flex-1 rounded-b-none"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function ListRowsSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <ul className="divide-y divide-base-300">
      {Array.from({ length: rows }, (_, i) => (
        <li key={i} className="flex items-center gap-3 py-3">
          <Bone className="size-11 shrink-0 rounded-lg" />
          <div className="min-w-0 flex-1">
            <Bone className="h-4 w-48 max-w-full" />
            <Bone className="mt-2 h-3 w-32 max-w-full" />
          </div>
          <Bone className="hidden h-6 w-20 rounded-full sm:block" />
          <Bone className="hidden h-8 w-20 sm:block" />
        </li>
      ))}
    </ul>
  );
}

function OverviewSkeleton() {
  return (
    <>
      <StatsSkeleton />
      <div className="grid gap-6 xl:grid-cols-2">
        <ChartSkeletonSized />
        <ChartSkeletonSized />
      </div>
      <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
        <Bone className="h-6 w-40" />
        <div className="mt-2">
          <ListRowsSkeleton />
        </div>
      </div>
    </>
  );
}

function TableSkeleton() {
  return (
    <>
      <Bone className="h-10 w-full max-w-md" />
      <div className="rounded-2xl border border-base-300 bg-base-50 p-4 sm:p-6">
        <div className="hidden gap-4 border-b border-base-300 pb-4 md:flex">
          {[28, 16, 16, 12, 12, 16].map((w, i) => (
            <Bone key={i} className="h-4" style-width={w} />
          ))}
        </div>
        <ListRowsSkeleton rows={7} />
      </div>
    </>
  );
}

function FormSkeleton() {
  return (
    <div className="rounded-2xl border border-base-300 bg-base-50 p-6 sm:p-8">
      <div className="space-y-6">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid gap-5 sm:grid-cols-2">
            {[0, 1].map((col) => (
              <div key={col}>
                <Bone className="h-4 w-24" />
                <Bone className="mt-2 h-10 w-full" />
              </div>
            ))}
          </div>
        ))}
        <div>
          <Bone className="h-4 w-28" />
          <Bone className="mt-2 h-28 w-full" />
        </div>
        <div className="flex justify-end gap-3 border-t border-base-300 pt-6">
          <Bone className="h-10 w-24" />
          <Bone className="h-10 w-36" />
        </div>
      </div>
    </div>
  );
}

function LoadingDashboard({
  variant = "overview",
  hideHeader = false,
  className,
}: LoadingDashboardProps) {
  return (
    <Container
      role="status"
      aria-busy="true"
      aria-live="polite"
      className={cx("space-y-6", className)}
    >
      {!hideHeader && <HeaderSkeleton />}
      {variant === "overview" && <OverviewSkeleton />}
      {variant === "table" && <TableSkeleton />}
      {variant === "form" && <FormSkeleton />}
      <span className="sr-only">Loading…</span>
    </Container>
  );
}

export default LoadingDashboard;
