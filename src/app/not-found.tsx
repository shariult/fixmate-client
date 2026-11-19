import Container from "@/components/ui/common/Container";
import Link from "next/link";
import { PiCompass } from "react-icons/pi";

function NotFoundPage() {
  return (
    <Container
      className="flex flex-col items-center justify-center min-h-screen"
      elClassName="bg-base-300"
    >
      <span className="grid place-items-center rounded-full border-4 border-dashed border-error/40 bg-error/10 p-2 mb-8 text-error">
        <PiCompass className="text-8xl" />
      </span>

      <h1 className="heading-2 mb-3">This page is out for repair</h1>
      <p className="max-w-[40ch] mb-8 text-muted text-center">
        We couldn&apos;t find the page you asked for. It may have moved, or the
        link might be mistyped.
      </p>

      <div className="btn-box justify-center">
        <Link href="/" className="btn btn-primary btn-lg">
          Back to Home
        </Link>
        <Link href="/services" className="btn btn-outline btn-lg">
          Browse services
        </Link>
      </div>
    </Container>
  );
}

export default NotFoundPage;
