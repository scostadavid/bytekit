import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => (
    <section className="w-full max-w-3xl mx-auto text-center my-32 px-4">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Tools for the <span className="text-primary">everyday</span> dev
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl mx-auto">
        Develop faster with the tools you use every day.
      </p>
      <div className="mt-8 text-center">
        <Link href="/app">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </section>
  );