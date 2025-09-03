import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[400px] flex items-center justify-center text-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Create and Share Polls Instantly
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl">
            The easiest way to gather opinions and make decisions. Get started for free.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/polls/new">Create a Poll</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/polls">View Polls</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
