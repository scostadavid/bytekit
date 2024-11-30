import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, FileJson } from 'lucide-react'; 

export const AvailableTools = () => (
  <section id="available-tools" className="w-full max-w-4xl mx-auto my-32 px-4">
    <h2 className="text-4xl font-bold mb-8 text-center text-primary">
      Available Tools
    </h2>
    <p className="text-center text-lg mb-12 text-muted-foreground">
      Take your development to the next level with our simple and powerful tools.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* JSON Formatter Card */}
      <Card className="shadow-sm border border-gray-200 rounded-lg transform transition duration-300 hover:scale-105">
        <CardHeader className="text-center bg-blue-100 p-4 rounded-t-lg">
          <FileJson className="w-10 h-10 text-blue-500 mx-auto" />
          <CardTitle className="text-xl font-semibold mt-4">JSON Formatter</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-4">
          <CardDescription className="text-base text-muted-foreground mb-4">
            Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.
          </CardDescription>
        </CardContent>
        <CardFooter className="text-center p-4">
          <a href="/app" className="text-blue-500 hover:text-blue-700 transition-colors font-medium">
            Try it now
          </a>
        </CardFooter>
      </Card>

      {/* File to Base64 Card */}
      <Card className="shadow-sm border border-gray-200 rounded-lg transform transition duration-300 hover:scale-105">
        <CardHeader className="text-center bg-yellow-100 p-4 rounded-t-lg">
          <FileIcon className="w-10 h-10 text-yellow-500 mx-auto" />
          <CardTitle className="text-xl font-semibold mt-4">File to Base64</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-4">
          <CardDescription className="text-base text-muted-foreground mb-4">
            Convert your files into Base64 strings in just a few clicks. Ideal for encoding files for easy sharing!
          </CardDescription>
        </CardContent>
        <CardFooter className="text-center p-4">
          <a href="/app" className="text-yellow-500 hover:text-yellow-700 transition-colors font-medium">
            Try it now
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
);
