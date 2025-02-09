'use server';

import { FAQ } from "@/components/sections/faq";
import { NavSection } from "@/components/sections/nav";
import { HeroSection } from "@/components/sections/hero";
import { HowItHelps } from "@/components/sections/help";
import { AvailableTools } from "@/components/sections/tools";
import { Footer } from "@/components/sections/footer";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavSection />
      <main className="flex-1">
        <HeroSection />
        <AvailableTools />
        <HowItHelps />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}