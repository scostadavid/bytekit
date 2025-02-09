"use client"

import * as React from "react"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SidebarCard() {
  return (
    <Card className="shadow-none">
      <form>
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-sm">Consider give me a follow to keep up with my projects :D</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-4">
          <div className="flex gap-2 justify-center">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="https://x.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path>
                </svg>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="https://github.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href="https://linkedin.com/in/scostadavid" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Button variant="link">
            <a href="https://scostadavid.dev" className="flex flex-row gap-2 items-center text-content hover:text-cta self-center" target="_blank">
              <span>scostadavid.dev</span>
            </a>
          </Button>
        </CardContent>
      </form>
    </Card>
  )
}
