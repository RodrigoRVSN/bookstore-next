import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen items-center justify-center flex flex-col gap-8">
      <h1>Welcome to the Bookstore!</h1>
      <div className="flex gap-8">
        <Button asChild variant="outline" tabIndex={0}>
          <Link href="/store">Explore Bookstore</Link>
        </Button>
        <Button asChild tabIndex={0}>
          <Link href="/events">Explore Events</Link>
        </Button>
      </div>
    </section>
  );
}
