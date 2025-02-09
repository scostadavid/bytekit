import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, FileJson, Calendar } from 'lucide-react'; 

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
      <Card className="relative bg-card border-border rounded-xl transform transition-all duration-300 hover:scale-105 flex flex-col">
        <CardHeader className="text-center p-6 rounded-t-xl">
          <div className="relative">
            <FileJson className="w-12 h-12 text-primary mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold mt-4">
            JSON Formatter
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            Format your JSON data to make it more readable and organized. Quickly tidy up your JSON for better visualization.
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 mt-auto">
          <a href="/app" className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
            Try it now
          </a>
        </CardFooter>
      </Card>

      {/* File to Base64 Card */}
      <Card className="relative bg-card border-border rounded-xl transform transition-all duration-300 hover:scale-105 flex flex-col">
        <CardHeader className="text-center p-6 rounded-t-xl">
          <div className="relative">
            <FileIcon className="w-12 h-12 text-primary mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold mt-4">
            File to Base64
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            Convert your files into Base64 strings in just a few clicks. Ideal for encoding files for easy sharing!
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 mt-auto">
          <a href="/app" className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
            Try it now
          </a>
        </CardFooter>
      </Card>

      {/* Date Converter Card */}
      <Card className="relative bg-card border-border rounded-xl transform transition-all duration-300 hover:scale-105 flex flex-col">
        <CardHeader className="text-center p-6 rounded-t-xl">
          <div className="relative">
            <Calendar className="w-12 h-12 text-primary mx-auto" />
          </div>
          <CardTitle className="text-2xl font-bold mt-4">
            Date Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            Convert between different date formats including Unix timestamp, UTC, ISO and more.
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 mt-auto">
          <a href="/app" className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
            Try it now
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
);
