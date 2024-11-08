'use client'

import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from "@/components/app-sidebar";


export default function DevToolkit() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((tool, index) => (
          <Link key={index} href={tool.url} className="block">
            <Card className="shadow-sm cursor-pointer transition-transform transform hover:scale-101 hover:border hover:border-primary">
              <CardHeader className="flex items-center justify-center p-6">
                {tool.icon && <tool.icon className="h-10 w-10 text-primary" />}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-semibold">{tool.title}</CardTitle>
                <CardDescription className="mb-4">
                  {tool.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

