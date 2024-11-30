import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

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
  
  
export const NavSection = () => (
  <header className="w-full fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="max-w-3xl mx-auto px-4 flex h-14 items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>
      <nav className="ml-auto flex items-center space-x-4">
        <Link href="#available-tools" className="hidden sm:block">
          <Button variant="link">Available Tools</Button>
        </Link>
        <Link href="#how-it-helps" className="hidden sm:block">
          <Button variant="link">How It Helps</Button>
        </Link>
        <Link href="#faq" className="hidden sm:block">
          <Button variant="link">FAQ</Button>
        </Link>
        <Link href="/app">
				  <Button>Go to App</Button>
				</Link>
      </nav>
    </div>
  </header>
);
