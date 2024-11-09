'use server';

import { FAQ } from "@/app/_components/sections/faq";
import { NavSection } from "@/app/_components/sections/nav";
import { HeroSection } from "@/app/_components/sections/hero";
import { HowItHelps } from "@/app/_components/sections/help";
import { AvailableTools } from "@/app/_components/sections/tools";
import { Footer } from "@/app/_components/sections/footer";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavSection />
      <main className="flex-1">
        <HeroSection />
        <HowItHelps />
        <AvailableTools />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}