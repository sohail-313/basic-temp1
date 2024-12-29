import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

// Define the interface for Hero component props
interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function Hero({ title, description, imageUrl }: HeroProps) {
  return (
    <div className="flex items-center opacity-0 animate-fade-in [--animation-delay:400ms] py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              {description}
            </p>
            <Button className="text-lg px-8 py-4 sm:px-10 sm:py-5">
              Learn More
              <span className="ml-2">→</span>
            </Button>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={title}
              width={1200}
              height={675}
              layout="responsive"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
