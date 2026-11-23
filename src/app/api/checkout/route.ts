import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getBookingAction } from "@/lib/bookingActions";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    const { bookingId } = await req.json();

    const resData = await getBookingAction(bookingId);
    if (!resData.isSuccess || !resData.data) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    const booking = resData.data;

    if (!booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    if (booking.status !== "completed") {
      return NextResponse.json(
        { error: "Service not completed yet" },
        { status: 400 },
      );
    }
    if (booking.paymentId) {
      return NextResponse.json({ error: "Already paid" }, { status: 400 });
    }

    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: booking?.serviceDetails?.title ?? "Test product",
            },
            unit_amount: Math.round(booking.finalAmount! * 100), // cents
          },
          quantity: 1,
        },
      ],
      metadata: { bookingId: String(booking._id) },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`, // adjust to your page
    });

    return NextResponse.json({ url: checkout.url });
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err));
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
