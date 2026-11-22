import React from "react";

function AdminServices() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Service Approval</h1>
        <p className="mt-1 text-muted">
          Only approved and available services appear on the public Services
          page.
        </p>
      </div>

      {/* <!-- In Next.js default this list to ?status=pending (or sort pending first, as shown here) --> */}
      <div className="mt-8 overflow-x-auto">
        <div role="tablist" className="tabs tabs-box w-fit bg-base-50">
          <a href="?status=" className="tab h-10 gap-2 tab-active">
            All<span className="badge badge-sm badge-soft">16</span>
          </a>
          <a href="?status=pending" className="tab h-10 gap-2">
            Pending<span className="badge badge-sm badge-soft">3</span>
          </a>
          <a href="?status=approved" className="tab h-10 gap-2">
            Approved<span className="badge badge-sm badge-soft">12</span>
          </a>
          <a href="?status=rejected" className="tab h-10 gap-2">
            Rejected<span className="badge badge-sm badge-soft">1</span>
          </a>
        </div>
      </div>

      {/* <!-- Desktop / tablet: table (pending rows are tinted and listed first) --> */}
      <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-base-300 bg-base-50 md:block">
        <table className="table min-w-[56rem]">
          <thead>
            <tr className="text-muted">
              <th>Service</th>
              <th>Technician</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Approval</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-warning/5">
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=iPad"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">iPad Screen Repair</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$79</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-warning">Pending</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button type="button" className="btn btn-sm btn-primary">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-warning/5">
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/cffafe/155e75?text=Inverter"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">
                      Inverter AC Installation Check
                    </p>
                    <p className="text-xs text-muted">AC</p>
                  </div>
                </div>
              </td>
              <td>Tanvir Ahmed</td>
              <td className="font-medium">$60</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-warning">Pending</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button type="button" className="btn btn-sm btn-primary">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr className="bg-warning/5">
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/ffe4e6/9f1239?text=Ceiling"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Ceiling Fan Repair</p>
                    <p className="text-xs text-muted">Electrical</p>
                  </div>
                </div>
              </td>
              <td>Sabbir Rahman</td>
              <td className="font-medium">$18</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-warning">Pending</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button type="button" className="btn btn-sm btn-primary">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=iPhone"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">iPhone Screen Replacement</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$49</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=Samsung"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Samsung Battery Replacement</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$29</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=Android"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Android Charging Port Fix</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$22</td>
              <td className="text-sm text-muted">Hidden by technician</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=Phone"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Phone Water Damage Cleaning</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$45</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/e0e7ff/3730a3?text=Laptop"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">
                      Laptop Keyboard &amp; Fan Servicing
                    </p>
                    <p className="text-xs text-muted">Laptop &amp; PC</p>
                  </div>
                </div>
              </td>
              <td>Nadia Karim</td>
              <td className="font-medium">$35</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/e0e7ff/3730a3?text=Windows"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">
                      Windows Reinstall &amp; Data Backup
                    </p>
                    <p className="text-xs text-muted">Laptop &amp; PC</p>
                  </div>
                </div>
              </td>
              <td>Nadia Karim</td>
              <td className="font-medium">$25</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/cffafe/155e75?text=Split"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Split AC Deep Cleaning</p>
                    <p className="text-xs text-muted">AC</p>
                  </div>
                </div>
              </td>
              <td>Tanvir Ahmed</td>
              <td className="font-medium">$30</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/cffafe/155e75?text=AC"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">
                      AC Gas Refill &amp; Leak Check
                    </p>
                    <p className="text-xs text-muted">AC</p>
                  </div>
                </div>
              </td>
              <td>Tanvir Ahmed</td>
              <td className="font-medium">$55</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/e0f2fe/075985?text=Refrigerator"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">
                      Refrigerator Compressor Repair
                    </p>
                    <p className="text-xs text-muted">Refrigerator</p>
                  </div>
                </div>
              </td>
              <td>Imran Hossain</td>
              <td className="font-medium">$70</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/fae8ff/86198f?text=Smart"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Smart TV Panel Diagnosis</p>
                    <p className="text-xs text-muted">TV</p>
                  </div>
                </div>
              </td>
              <td>Imran Hossain</td>
              <td className="font-medium">$40</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/fef3c7/92400e?text=Front-Load"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Front-Load Washer Repair</p>
                    <p className="text-xs text-muted">Washing Machine</p>
                  </div>
                </div>
              </td>
              <td>Sabbir Rahman</td>
              <td className="font-medium">$45</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/ffe4e6/9f1239?text=House"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">House Wiring Safety Check</p>
                    <p className="text-xs text-muted">Electrical</p>
                  </div>
                </div>
              </td>
              <td>Sabbir Rahman</td>
              <td className="font-medium">$38</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-success">Approved</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <img
                    src="https://placehold.co/96x96/dcfce7/166534?text=Smartwatch"
                    alt=""
                    className="size-12 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-medium">Smartwatch Battery Swap</p>
                    <p className="text-xs text-muted">Smartphone</p>
                  </div>
                </div>
              </td>
              <td>Rafiq Hasan</td>
              <td className="font-medium">$35</td>
              <td className="text-sm text-muted">Available</td>
              <td>
                <span className="badge badge-soft badge-error">Rejected</span>
              </td>
              <td>
                <div className="flex gap-2 justify-end">
                  <button type="button" className="btn btn-sm btn-primary">
                    Approve
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <!-- EMPTY STATE: render when the selected filter has no services --> */}
      <div className="mt-4 hidden rounded-2xl border border-dashed border-base-300 bg-base-50 px-6 py-16 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-base-200 text-muted">
          <svg className="size-7">
            <use href="#i-shield" />
          </svg>
        </span>
        <h2 className="mt-5 font-title text-xl font-medium">
          Nothing to review
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm/6 text-muted">
          There are no services with this status right now.
        </p>
      </div>

      {/* <!-- Reject confirmation. PATCH /api/admin/services/:id/approval { approvalStatus: 'rejected' } --> */}
      <dialog id="reject_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <span className="grid size-12 place-items-center rounded-full bg-error/15 text-error">
            <svg className="size-6">
              <use href="#i-alert" />
            </svg>
          </span>
          <h3 className="heading-3 mt-4">Reject this service?</h3>
          <p className="mt-2 text-sm/6 text-muted">
            It will be hidden from customers. The technician can edit it, which
            sends it back to Pending for another review.
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button className="btn btn-ghost">Go back</button>
              <button className="btn btn-error">Reject service</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  );
}

export default AdminServices;
