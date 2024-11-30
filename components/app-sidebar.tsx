"use client"

import * as React from "react"
import {
    File,
    FileJson
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { Logo } from "@/components/logo"

import {
    Sidebar,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export const data = [
    {
      title: "JSON Formatter/Validator",
      url: "/app/json",
      description: 'Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.',
      icon: FileJson,
    },
    {
      title: "File to Base64",
      url: "/app/base64",
      description: 'Convert your files into Base64 strings.',
      icon: File,
    },
  ];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Logo />
        <Separator />
        <NavMain items={data} />
      </SidebarHeader>

      <SidebarRail />
    </Sidebar>
  )
}
