import Container from "@/components/ui/common/Container";
import Link from "next/link";

function NotFoundPage() {
  return (
    <Container
      className="flex flex-col items-center justify-center min-h-screen"
      elClassName="bg-base-300"
    >
      <h2 className="text-6xl mb-2 font-extrabold">404</h2>
      <p className="text-muted/70 mb-8">
        Page Not Found. Could not find requested resource.
      </p>

      <Link
        href="/"
        className="btn bg-red-500 text-gray-50 hover:bg-gray-950 rounded-lg border-none"
      >
        Return Home
      </Link>
    </Container>
  );
}
export default NotFoundPage;
