import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Box } from "lucide-react";

function Logo() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <Box className="size-4" />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">
            ByteKit
        </span>
        <span className="truncate text-xs">Dev Tools</span>
      </div>
    </div>
  );
}


const NavSection = () => (
  <header className="w-full fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="max-w-3xl mx-auto flex h-14 items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>
      <nav className="ml-auto flex items-center space-x-4">
        <Link href="/app">
          <Button>Go to App</Button>
        </Link>
      </nav>
    </div>
  </header>
)


const HeroSection = () => (
  <section className="w-full max-w-3xl mx-auto text-center my-32">
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

const HowItHelps = () => (
  <section className="w-full max-w-3xl mx-auto text-center my-32">
    <h2 className="text-3xl font-bold mb-8">How ByteKit helps you</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StepCard icon="🔧" title="1. Choose a Tool" description="Select from a variety of developer tools like converters and prettyifiers." />
      <StepCard icon="⚙️" title="2. Input Your Data" description="Simply paste or enter the data you want to process." />
      <StepCard icon="🔄" title="3. Process the Data" description="Dont worry, the software will do this for you." />
      <StepCard icon="📥" title="4. Get Results" description="Instantly copy your data for use." />
    </div>
  </section>
);
const StepCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <Card className="shadow-sm border border-gray-200">
    <CardContent className="flex flex-col items-center p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const AvailableTools = () => (
  <section className="w-full max-w-3xl mx-auto my-32">
    <h2 className="text-3xl font-bold mb-8 text-center">Available Tools</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="shadow-sm border border-gray-200 flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">JSON Formatter</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="mb-4">
            Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <a href="/app" className="text-blue-500 hover:underline">
            Try it now
          </a>
        </CardFooter>
      </Card>

      <Card className="shadow-sm border border-gray-200 flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">File to Base64</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="mb-4">
            Convert your files into Base64 strings.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <a href="/app" className="text-blue-500 hover:underline">
            Try it now
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
);


const FAQ = () => (
  <section className="w-full max-w-3xl mx-auto text-center my-32">
    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes, ByteKit is free to use.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          We take data security seriously. All data processing is done client-side so the server never knows your inputs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);




const Footer = () => (
  <footer className="border-t bg-background w-full max-w-3xl mx-auto text-center my-16">
    <div className="container flex flex-col items-center gap-4 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://scostadavid.xyz"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            scostadavid
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
);


export default function Home() {
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