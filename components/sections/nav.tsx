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
  <header className="container mx-auto flex items-center justify-between py-4">
    <div className="flex items-center gap-2">
      <Logo />
    </div>
    <Link href="/app" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
      <Button>
        Get Started
      </Button>
    </Link>
  </header>
);
