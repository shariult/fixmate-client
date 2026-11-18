"use client";

import Container from "@/components/ui/common/Container";
import { useEffect } from "react";

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
      <h2 className="text-6xl mb-2 font-extrabold">500</h2>
      <p className="text-muted/70 mb-8">
        Internal server error. Something went wrong!
      </p>
      <button
        onClick={() => reset()}
        className="btn bg-red-500 text-gray-50 hover:bg-gray-950 rounded-lg border-none"
      >
        Try again
      </button>
    </Container>
  );
}

export default ErrorPage;
