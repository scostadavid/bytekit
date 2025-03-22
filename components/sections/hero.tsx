import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => (
  <section className="container mx-auto py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
    {/* Left content */}
    <div>
      <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-sm mb-6">
        <span>Developer Tools</span>
        <span className="text-blue-600">Web-based</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Tools for the everyday developer</h1>
      <p className="text-gray-600 text-lg mb-8">
        Simplify your development workflow with a growing set of developer tools.
      </p>
      <Link href="/app" className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
        <Button size="lg">
          Try our tools
        </Button>
      </Link>
    </div>

    {/* Right content (video) */}
    {/* <div className="relative">
      <div className="w-full h-auto bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        <video className="w-full h-full object-cover" controls>
          <source src="/path/to/your-demo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div> */}
    <div className="relative">
      <div className="w-full h-auto bg-gray-100 rounded-xl shadow-lg overflow-hidden">
        {/* <img
          className="w-full h-full object-cover"
          src=""
          alt="Demo GIF"
        /> */}
        <Image 
          className="w-full h-full object-cover"
          alt="Demo GIF"
          src="/demo.gif"
          width={956}
          height={480} 
        />
      </div>
    </div>
  </section>
);
