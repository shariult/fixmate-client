import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";

type TechnicianAddServiceProps = {
  className?: string;
  elClassName?: string;
} & ComponentPropsWithoutRef<"section">;

function TechnicianAddService(props: TechnicianAddServiceProps) {
  const { className, elClassName, ...rest } = props;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Add a service</h1>
        <p className="mt-1 text-muted">
          Describe what you repair. An admin reviews every service before
          customers can see it.
        </p>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <form
          className="space-y-5 rounded-2xl border border-base-300 bg-base-50 p-6 sm:p-8 xl:col-span-2"
          action="#"
          method="post"
        >
          {/* <!-- Saved with approvalStatus: 'pending' and isAvailable: true; then toast: "Service submitted. It's waiting for admin approval." --> */}
          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Technician name</legend>
              <input
                type="text"
                className="input w-full bg-base-200"
                value="Rafiq Hasan"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Technician email</legend>
              <input
                type="email"
                className="input w-full bg-base-200"
                value="rafiq@example.com"
                readOnly
              />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service title</legend>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="e.g. iPhone Screen Replacement"
              value=""
            />
            <p className="mt-1 hidden text-xs text-error">
              Please enter a title.
            </p>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <select name="category" className="select w-full">
                <option value="" disabled selected>
                  Choose a category
                </option>
                <option>Smartphone</option>
                <option>Laptop &amp; PC</option>
                <option>AC</option>
                <option>Refrigerator</option>
                <option>TV</option>
                <option>Washing Machine</option>
                <option>Electrical</option>
              </select>
              <p className="mt-1 hidden text-xs text-error">
                Please choose a category.
              </p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Base price (USD)</legend>
              <label className="input w-full">
                <span className="text-muted">$</span>
                <input
                  type="number"
                  name="basePrice"
                  min="1"
                  step="0.01"
                  placeholder="49"
                  value=""
                />
              </label>
              <p className="mt-1 hidden text-xs text-error">
                Enter a price greater than 0.
              </p>
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea
              name="description"
              className="textarea h-32 w-full"
              placeholder="What does the service include? Mention parts, checks and what the customer should prepare."
            ></textarea>
            <p className="mt-1 hidden text-xs text-error">
              Please describe the service.
            </p>
          </fieldset>

          <fieldset>
            <legend className="fieldset-legend">Service mode</legend>
            <div className="mt-1 grid gap-3 sm:grid-cols-2">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="serviceMode"
                  value="Home Visit"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="flex h-full items-start gap-3 rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <svg className="size-5">
                      <use href="#i-home" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-title font-medium">Home Visit</p>
                    <p className="text-xs/5 text-muted">
                      You go to the customer
                    </p>
                  </div>
                </div>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="serviceMode"
                  value="Shop Drop-off"
                  className="peer sr-only"
                />
                <div className="flex h-full items-start gap-3 rounded-xl border border-base-300 bg-base-50 p-4 transition-colors peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-1 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <svg className="size-5">
                      <use href="#i-store" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-title font-medium">Shop Drop-off</p>
                    <p className="text-xs/5 text-muted">
                      Customer brings the device to you
                    </p>
                  </div>
                </div>
              </label>
            </div>
          </fieldset>

          <div className="grid gap-5 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Service area</legend>
              <input
                type="text"
                name="serviceArea"
                className="input w-full"
                placeholder="e.g. Dhanmondi, Dhaka"
                value=""
              />
              <p className="mt-1 hidden text-xs text-error">
                Please enter the area you cover.
              </p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Estimated duration</legend>
              <input
                type="text"
                name="estimatedDuration"
                className="input w-full"
                placeholder="e.g. 2-3 hours"
                value=""
              />
              <p className="mt-1 hidden text-xs text-error">
                Please add an estimated duration.
              </p>
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Service image</legend>
            {/* <!-- File input, not a URL field. On submit: POST the file to the ImgBB API, then save the returned URL. --> */}
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-base-300 bg-base-100 px-4 py-8 text-center transition-colors hover:border-primary">
              <svg className="size-8 text-muted">
                <use href="#i-upload" />
              </svg>
              <span className="text-sm font-medium">
                Click to upload an image
              </span>
              <span className="text-xs text-muted">JPG or PNG, up to 5 MB</span>
              <input
                type="file"
                id="image-input"
                name="image"
                accept="image/*"
                className="sr-only"
              />
            </label>
            <img
              id="image-preview"
              alt="Image preview"
              className="mt-3 hidden aspect-[16/9] w-full rounded-xl object-cover"
            />
            <p className="mt-1 hidden text-xs text-error">
              Please upload an image.
            </p>
          </fieldset>

          <div className="flex flex-wrap justify-end gap-3 border-t border-base-300 pt-6">
            <a
              href="dashboard-technician-my-services.html"
              className="btn btn-ghost"
            >
              Cancel
            </a>
            <button type="submit" className="btn btn-primary">
              Submit for approval
            </button>
          </div>
        </form>

        <aside className="space-y-4 xl:col-span-1">
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">What happens next</h2>
            <ul className="mt-4 space-y-3 text-sm/6 text-muted">
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Your service is saved as{" "}
                <span className="badge badge-soft badge-warning badge-sm">
                  Pending
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                An admin approves or rejects it
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Once approved it appears on the Services page
              </li>
              <li className="flex gap-3">
                <svg className="mt-1 size-4 shrink-0 text-primary">
                  <use href="#i-check" />
                </svg>
                Editing a service later sends it back for review
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-base-300 bg-base-50 p-6">
            <h2 className="heading-3">Tips for a good listing</h2>
            <ul className="mt-4 space-y-3 text-sm/6 text-muted">
              <li>Use a clear photo of the device or your workspace.</li>
              <li>
                Set a base price you can honestly start from. You confirm the
                final amount after the job.
              </li>
              <li>
                Name the exact areas you cover so customers know you can reach
                them.
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default TechnicianAddService;
