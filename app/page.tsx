'use server';
import { NavSection } from '@/components/sections/nav';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Code, FileText, Calendar, Settings, Wrench, ChevronRight, Box, Database } from 'lucide-react';
import { HeroSection } from '@/components/sections/hero';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col px-2">
      <NavSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Hero 2 */}
      <section className="container mx-auto py-12 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Code className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <CardTitle className="text-primary dark:text-white">Easy-to-use, intuitive tools</CardTitle>
            <CardDescription className="dark:text-gray-300">Running on the web</CardDescription>
          </CardHeader>
        </Card>

        {/* Card 2 */}
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Wrench className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <CardTitle className="dark:text-white">Built for developers</CardTitle>
            <CardDescription className="dark:text-gray-300">By a developer, for developers.</CardDescription>
          </CardHeader>
        </Card>

        {/* Card 3 */}
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Settings className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <CardTitle className="dark:text-white">Growing Tool Collection</CardTitle>
            <CardDescription className="dark:text-gray-300">New tools added regularly.</CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-2">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Take your development to the next level</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            With our simple and powerful tools, you can streamline your workflow and focus on what matters most.
          </p>
        </div>

        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1: JSON Formatter */}
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Code className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <CardTitle className="dark:text-white">JSON Formatter</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/app">
                <Button variant="outline" className="rounded-full text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900">
                  Try it now <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 2: File to Base64 */}
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <FileText className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <CardTitle className="dark:text-white">File to Base64</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Convert your files into Base64 strings in just a few clicks. Ideal for encoding files for easy sharing!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/app">
                <Button variant="outline" className="rounded-full text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900">
                  Try it now <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 3: Date Converter */}
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <CardTitle className="dark:text-white">Date Converter</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Convert between different date formats including Unix timestamp, UTC, ISO and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/app">
                <Button variant="outline" className="rounded-full text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900">
                  Try it now <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card 4: SQL */}
          <Card>
            <CardHeader>
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Database className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <CardTitle className="dark:text-white">SQL formatter</CardTitle>
              <CardDescription className="dark:text-gray-300">
                Prettify your SQL queries and convert between different dialects, MySQL, Postgres and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/app">
                <Button variant="outline" className="rounded-full text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900">
                  Try it now <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">How ByteKit helps you</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our tools are designed to make your development workflow smoother and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">1. Choose a Tool</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Select from a variety of developer tools like converters and prettyifiers.</p>
          </div>

          <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">2. Input Your Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Simply paste or enter the data you want to process.</p>
          </div>

          <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">3. Process the Data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Don&apos;t worry, the software will do this for you.</p>
          </div>

          <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">📥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">4. Get Results</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Instantly copy your data for use.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-2">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 dark:text-white">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border rounded-lg px-4 dark:border-gray-700">
                <AccordionTrigger className="text-left py-4 dark:text-white">Is ByteKit free to use?</AccordionTrigger>
                <AccordionContent className="pb-4 dark:text-gray-300">Yes, ByteKit is free to use.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4 dark:border-gray-700">
                <AccordionTrigger className="text-left py-4 dark:text-white">
                  Do I need to create an account to use the tools?
                </AccordionTrigger>
                <AccordionContent className="pb-4 dark:text-gray-300">
                  No, you don&apos;t need to create an account. All tools are available for immediate use without any registration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4 dark:border-gray-700">
                <AccordionTrigger className="text-left py-4 dark:text-white">
                  Is my data secure when using ByteKit tools?
                </AccordionTrigger>
                <AccordionContent className="pb-4 dark:text-gray-300">
                  Yes, all processing happens in your browser. We don&apos;t store or transmit your data to any servers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-4 dark:border-gray-700">
                <AccordionTrigger className="text-left py-4 dark:text-white">
                  Will there be more tools added in the future?
                </AccordionTrigger>
                <AccordionContent className="pb-4 dark:text-gray-300">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Ready to Get Started?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our free developer tools today and experience the difference in your workflow.
            </p>
            <Link href="/app">
              <Button size="lg">Try ByteKit Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-8 border-t dark:border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-900 text-white">
            <Box className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold dark:text-white">ByteKit</span>
            <span className="truncate text-xs dark:text-gray-300">Dev Tools</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} <Link href="https://scostadavid.dev" target="_blank" rel="noreferrer noopener">scostadavid</Link>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}