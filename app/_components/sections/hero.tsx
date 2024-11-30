import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => (
  <section className="w-full max-w-3xl mx-auto text-center my-32 px-4">
    <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
      Tools for the everyday developer 
    </h1>

    <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl mx-auto">
      Simplify your development workflow with a growing set of developer tools
    </p>
    <div className="mt-8">
      <ul className="space-y-2 text-left mx-auto max-w-[400px]">
        <li className="flex items-center">
          <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
          Easy-to-use, intuitive tools.
        </li>
        <li className="flex items-center">
          <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
          Running on the web, in the OS you like. PWA soon. 
        </li>
        <li className="flex items-center">
          <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
          <span>Built for developers, by a{' '}
            <Link href="https://scostadavid.xyz" rel="noreferrer noopenner" target="_blank">{' '}developer</Link>.
          </span>
        </li>
      </ul>
    </div>
    <div className="mt-8 text-center">
      <Link href="/app">
        <Button size="lg">Try for free</Button>
      </Link>
    </div>
  </section>
);
