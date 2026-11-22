import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { PiPencilSimpleBold, PiTrashBold } from "react-icons/pi";

type MyServicesMobileCardsProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function MyServicesMobileCards(props: MyServicesMobileCardsProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <div className="mt-8 space-y-4 md:hidden">
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=iPhone"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">
              iPhone Screen Replacement
            </p>
            <p className="text-xs text-muted">Smartphone · $49</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-success">Approved</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
              checked
            />
            <span className="text-muted">Available</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=Samsung"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">
              Samsung Battery Replacement
            </p>
            <p className="text-xs text-muted">Smartphone · $29</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-success">Approved</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
              checked
            />
            <span className="text-muted">Available</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=iPad"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">iPad Screen Repair</p>
            <p className="text-xs text-muted">Smartphone · $79</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-warning">Pending</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
              checked
            />
            <span className="text-muted">Available</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=Android"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">
              Android Charging Port Fix
            </p>
            <p className="text-xs text-muted">Smartphone · $22</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-success">Approved</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
            />
            <span className="text-muted">Hidden</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=Smartwatch"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">Smartwatch Battery Swap</p>
            <p className="text-xs text-muted">Smartphone · $35</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-error">Rejected</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
              checked
            />
            <span className="text-muted">Available</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-base-300 bg-base-50 p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/96x96/dcfce7/166534?text=Phone"
            alt=""
            className="size-14 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="font-medium leading-snug">
              Phone Water Damage Cleaning
            </p>
            <p className="text-xs text-muted">Smartphone · $45</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span className="badge badge-soft badge-success">Approved</span>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="toggle toggle-primary toggle-sm"
              aria-label="Toggle availability"
              checked
            />
            <span className="text-muted">Available</span>
          </label>
        </div>
        <div className="mt-4 flex justify-end border-t border-base-300 pt-3">
          <div className="flex justify-end gap-1">
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square"
              aria-label="Edit service"
            >
              <PiPencilSimpleBold className="text-lg" />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-ghost btn-square text-error"
              aria-label="Delete service"
            >
              <PiTrashBold className="text-lg text-error" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MyServicesMobileCards;
