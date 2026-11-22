import React, { ComponentPropsWithoutRef } from "react";
import Container from "@/components/ui/common/Container";
import { PiCheckBold, PiCreditCardBold } from "react-icons/pi";

type CustomerBookingTableProps = {
  className?: string;
} & ComponentPropsWithoutRef<"table">;

function CustomerBookingTable(props: CustomerBookingTableProps) {
  const { className, ...rest } = props;

  return (
    <table className={`table ${className}`} {...rest}>
      <thead>
        <tr className="text-muted">
          <th>Service</th>
          <th>Technician</th>
          <th>Preferred date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Payment</th>
          <th className="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
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
          <td className="whitespace-nowrap">20 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$49</span>
            <span className="block text-xs text-muted">Base price</span>
          </td>
          <td>
            <span className="badge badge-soft badge-info">Requested</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <button type="button" className="btn btn-sm btn-outline btn-error">
              Cancel
            </button>
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
          <td className="whitespace-nowrap">22 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$30</span>
            <span className="block text-xs text-muted">Base price</span>
          </td>
          <td>
            <span className="badge badge-soft badge-secondary">Accepted</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
                <p className="font-medium">Refrigerator Compressor Repair</p>
                <p className="text-xs text-muted">Refrigerator</p>
              </div>
            </div>
          </td>
          <td>Imran Hossain</td>
          <td className="whitespace-nowrap">19 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$70</span>
            <span className="block text-xs text-muted">Base price</span>
          </td>
          <td>
            <span className="badge badge-soft badge-warning">In Progress</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
          <td className="whitespace-nowrap">12 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$42</span>
            <span className="block text-xs text-muted">Base $35</span>
          </td>
          <td>
            <span className="badge badge-soft badge-success">Completed</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <button type="button" className="btn btn-sm btn-primary">
              <PiCreditCardBold />
              Pay Now
            </button>
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
          <td className="whitespace-nowrap">5 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$50</span>
            <span className="block text-xs text-muted">Base $45</span>
          </td>
          <td>
            <span className="badge badge-soft badge-success">Completed</span>
          </td>
          <td>
            <span className="badge badge-success gap-1">
              <PiCheckBold />
              Paid
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
          <td className="whitespace-nowrap">20 Oct 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$25</span>
            <span className="block text-xs text-muted">Base $25</span>
          </td>
          <td>
            <span className="badge badge-soft badge-success">Completed</span>
          </td>
          <td>
            <span className="badge badge-success gap-1">
              <PiCheckBold />
              Paid
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
          <td className="whitespace-nowrap">2 Oct 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$38</span>
            <span className="block text-xs text-muted">Base $38</span>
          </td>
          <td>
            <span className="badge badge-soft badge-success">Completed</span>
          </td>
          <td>
            <span className="badge badge-success gap-1">
              <PiCheckBold />
              Paid
            </span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
          <td className="whitespace-nowrap">1 Nov 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$40</span>
            <span className="block text-xs text-muted">Base price</span>
          </td>
          <td>
            <span className="badge badge-soft badge-error">Rejected</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
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
          <td className="whitespace-nowrap">28 Oct 2026</td>
          <td className="whitespace-nowrap">
            <span className="font-medium">$29</span>
            <span className="block text-xs text-muted">Base price</span>
          </td>
          <td>
            <span className="badge badge-soft badge-neutral">Cancelled</span>
          </td>
          <td>
            <span className="badge badge-outline">Unpaid</span>
          </td>
          <td className="text-right">
            <span className="text-sm text-muted">—</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerBookingTable;
