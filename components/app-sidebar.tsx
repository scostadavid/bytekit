"use client"

import * as React from "react"
import {
    File,
    FileJson,
    Calendar
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { Logo } from "@/components/logo"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarCard } from "./sidebar-card"

export const data = [
    {
      title: "JSON Formatter/Validator",
      url: "/app/json",
      description: 'Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.',
      icon: FileJson,
    },
    {
      title: "Date Converter",
      url: "/app/date",
      description: 'Convert between different date formats including Unix timestamp, UTC, ISO and more.',
      icon: Calendar,
    },
    {
      title: "File to Base64",
      url: "/app/base64",
      description: 'Convert your files into Base64 strings and vice versa.',
      icon: File,
    },
  ];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Logo />
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1 align-bottom">
          <SidebarCard />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
