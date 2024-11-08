'use client'

import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { AppSidebar } from '@/components/app-sidebar'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <SidebarProvider>
        <AppSidebar />
  
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
  
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
  
           <main className="flex-1 overflow-y-auto p-6">
             {children}
           </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
}
  