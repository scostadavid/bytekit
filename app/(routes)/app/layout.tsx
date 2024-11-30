'use client'

import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { AppSidebar } from '@/components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Toaster } from '@/components/ui/toaster'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    const breadcrumbs = pathname.split('/').slice(1);
    
    return (
        <SidebarProvider>
        <AppSidebar />
  
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              {/* breadcrumbs */}
              <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList key={'foo'}>
              {
                breadcrumbs.map((breadcrumb, index) => {
                  return (
                    <React.Fragment key={`bc-${index}`}>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href={`/${breadcrumb}`}>
                          {breadcrumb}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {
                        index !== breadcrumbs.length - 1 ? <BreadcrumbSeparator className="hidden md:block" /> : null
                      }
                    </React.Fragment>
                  )
                })
              }
            </BreadcrumbList>
          </Breadcrumb>
              {/*  */}


            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
  
           <main className="flex-1 overflow-y-auto p-6">
             {children}
           </main>
           <Toaster />
          </div>
        </SidebarInset>
      </SidebarProvider>
    );
}
  