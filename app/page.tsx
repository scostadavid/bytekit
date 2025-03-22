'use server';
import { NavSection } from "@/components/sections/nav";

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Code, FileText, CalendarIcon as DateIcon, Settings, Wrench, ChevronRight, Box } from "lucide-react"
import { HeroSection } from "@/components/sections/hero";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col px-2">
      <NavSection />


      {/* Hero Section */}
      <HeroSection />
      {/* Hero 2 */}
      <section className="container mx-auto py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="mb-4">
            <Code className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy-to-use, intuitive tools</h3>
          <p className="text-gray-600">Running on the web</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="mb-4">
            <Wrench className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Built for developers</h3>
          <p className="text-gray-600">By a developer, for developers.</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="mb-4">
            <Settings className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Growing Tool Collection</h3>
          <p className="text-gray-600">New tools added regularly.</p>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="bg-gray-50 py-16 px-2">
        <div className="container mx-auto text-center mb-12">
          <div className="text-blue-600 mb-2">Available Tools</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Take your development to the next level</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With our simple and powerful tools, you can streamline your workflow and focus on what matters most.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Code className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">JSON Formatter</h3>
            <p className="text-gray-600 mb-4">
              Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better
              visualization.
            </p>
            <Link href="/app">
              <Button variant="outline" className="rounded-full text-blue-600 border-blue-600 hover:bg-blue-50">
                Try it now <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <FileText className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">File to Base64</h3>
            <p className="text-gray-600 mb-4">
              Convert your files into Base64 strings in just a few clicks. Ideal for encoding files for easy sharing!
            </p>
            <Link href="/app">
              <Button variant="outline" className="rounded-full text-blue-600 border-blue-600 hover:bg-blue-50">
                Try it now <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <DateIcon className="text-blue-600" size={20} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Date Converter</h3>
            <p className="text-gray-600 mb-4">
              Convert between different date formats including Unix timestamp, UTC, ISO and more.
            </p>
            <Link href="/app">
              <Button variant="outline" className="rounded-full text-blue-600 border-blue-600 hover:bg-blue-50">
                Try it now <ChevronRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How ByteKit helps you</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our tools are designed to make your development workflow smoother and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 text-2xl font-bold">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Choose a Tool</h3>
            <p className="text-gray-600 mb-4">Select from a variety of developer tools like converters and prettyifiers.</p>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 text-2xl font-bold">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Input Your Data</h3>
            <p className="text-gray-600 mb-4">Simply paste or enter the data you want to process.</p>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 text-2xl font-bold">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Process the Data</h3>
            <p className="text-gray-600 mb-4">Don&apos;t worry, the software will do this for you.</p>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 text-2xl font-bold">📥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Get Results</h3>
            <p className="text-gray-600 mb-4">Instantly copy your data for use.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">Is ByteKit free to use?</AccordionTrigger>
                <AccordionContent className="pb-4">Yes, ByteKit is free to use.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">
                  Do I need to create an account to use the tools?
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  No, you don&apos;t need to create an account. All tools are available for immediate use without any
                  registration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">
                  Is my data secure when using ByteKit tools?
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  Yes, all processing happens in your browser. We don&apos;t store or transmit your data to any servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left py-4">
                  Will there be more tools added in the future?
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  Yes, we&apos;re constantly working on adding new tools to make your development workflow even smoother.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto py-16">
        <div className="p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using our free developer tools today and experience the difference in your workflow.
            </p>
            <Link href="/app">
              <Button size="lg"> 
                Try ByteKit Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Box className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                    ByteKit
                </span>
              <span className="truncate text-xs">Dev Tools</span>
            </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} <Link href="https://scostadavid.dev" target="_blank" rel="noreferrer noopener">scostadavid</Link>. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

