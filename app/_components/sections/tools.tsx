import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const AvailableTools = () => (
    <section className="w-full max-w-3xl mx-auto my-32 px-4">
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