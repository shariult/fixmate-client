import Container from "@/components/ui/common/Container";
import EmptyData from "@/components/ui/common/EmptyData";
import { getUserPayments } from "@/lib/booking/bookingActions";
import { getPaymentIndexAction } from "@/lib/payment/paymentActions";
import { formatDate } from "@/lib/utils";
import React from "react";
import { PiCheckBold, PiCreditCardBold } from "react-icons/pi";

async function CustomerPaymentsPage() {
  const resData = await getPaymentIndexAction();
  if (!resData.isSuccess) {
    return (
      <Container>
        <EmptyData message="Something went wrong!" />
      </Container>
    );
  }
  const payments = resData.data;

  return (
    <main className="flex-1 p-4 md:p-8">
      <div>
        <h1 className="heading-2">Payment History</h1>
        <p className="mt-1 text-muted">
          Every payment you've made, with its Stripe transaction ID.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Total paid</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                ${payments.reduce((sum, p) => sum + p.amount, 0)}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiCreditCardBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">Across all completed jobs</p>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-50 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">Payments made</p>
              <p className="mt-2 font-title text-3xl font-semibold">
                {payments.length}
              </p>
            </div>
            <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <PiCheckBold className="text-2xl" />
            </span>
          </div>
          <p className="mt-3 text-xs text-muted">
            One payment per completed job
          </p>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-base-300 bg-base-50">
        <table className="table">
          <thead>
            <tr className="text-muted">
              <th>Service</th>
              <th>Technician</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Payment date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item) => {
              return (
                <tr key={item._id}>
                  <td className="font-medium">{item.serviceDetails?.title}</td>
                  <td>{item.customerDetails?.name}</td>
                  <td className="font-medium">${item.amount}</td>
                  <td>
                    <span className="font-mono text-xs text-muted">
                      {item.transactionId}
                    </span>
                  </td>
                  <td className="whitespace-nowrap">
                    {new Date(item.paidAt).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <!-- EMPTY STATE: render when there are no payments --> */}
      {payments.length === 0 && <EmptyData message="No payments made!" />}
    </main>
  );
}

export default CustomerPaymentsPage;
