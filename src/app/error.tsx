"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { PiArrowCounterClockwiseBold, PiWarningBold } from "react-icons/pi";
import Container from "@/components/ui/common/Container";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  });

  return (
    <Container
      className="flex flex-col items-center justify-center min-h-screen"
      elClassName="bg-base-300"
    >
      <span className="mx-auto mb-8 grid size-20 place-items-center rounded-full bg-error/15 text-error">
        <PiWarningBold className="text-4xl" />
      </span>

      <h1 className="heading-2 mb-3">Something went wrong</h1>
      <p className="text-muted mb-8 max-w-[48ch] text-center">
        We hit an unexpected problem while loading this page. Your data is safe.
        Try again, and if it keeps happening, contact support.
      </p>

      <div className="btn-box justify-center">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => reset()}
        >
          <PiArrowCounterClockwiseBold />
          Try again
        </button>
        <Link href="/" className="btn btn-outline btn-lg">
          Back to Home
        </Link>
      </div>
      {/* <p className="mt-6 text-xs text-muted">
        Error reference:
        <code className="rounded bg-base-200 px-1.5 py-0.5">digest-0000</code>
      </p> */}
    </Container>
  );
}

export default ErrorPage;
