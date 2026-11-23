import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  urlQuery: URLSearchParams;
};

function buildHref(urlQuery: URLSearchParams, page: number) {
  const params = new URLSearchParams(urlQuery.toString()); // clone, don't mutate the original
  params.set("page", String(page));

  // Optional: drop empty values so you get ?mode=home-visit&sort=newest&page=2
  // instead of ?search=&category=&mode=home-visit&sort=newest&page=2
  for (const [key, value] of Array.from(params.entries())) {
    if (value === "") params.delete(key);
  }

  return `?${params.toString()}`;
}

function getPageItems(page: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: (number | "...")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  if (start > 2) items.push("...");
  for (let i = start; i <= end; i++) items.push(i);
  if (end < totalPages - 1) items.push("...");

  items.push(totalPages);
  return items;
}

function Pagination({ page, totalPages, urlQuery }: PaginationProps) {
  if (totalPages <= 1) return null;

  const items = getPageItems(page, totalPages);

  return (
    <nav aria-label="Pagination" className="mt-12 flex justify-center">
      <div className="join">
        {page > 1 ? (
          <Link
            href={buildHref(urlQuery, page - 1)}
            className="join-item btn btn-sm"
          >
            Previous
          </Link>
        ) : (
          <button className="join-item btn btn-sm" disabled>
            Previous
          </button>
        )}

        {items.map((item, i) =>
          item === "..." ? (
            <button
              key={`ellipsis-${i}`}
              className="join-item btn btn-sm"
              disabled
            >
              ...
            </button>
          ) : (
            <Link
              key={item}
              href={buildHref(urlQuery, item)}
              aria-current={item === page ? "page" : undefined}
              className={`join-item btn btn-sm ${
                item === page ? "btn-active btn-primary" : ""
              }`}
            >
              {item}
            </Link>
          ),
        )}

        {page < totalPages ? (
          <Link
            href={buildHref(urlQuery, page + 1)}
            className="join-item btn btn-sm"
          >
            Next
          </Link>
        ) : (
          <button className="join-item btn btn-sm" disabled>
            Next
          </button>
        )}
      </div>
    </nav>
  );
}

export default Pagination;
