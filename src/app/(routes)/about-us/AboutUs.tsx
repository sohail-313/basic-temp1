import Image from "next/image";
import React from "react";

// Define the interface for AboutUs component props
interface AboutUsProps {
  title: string;
  description: string;
  imageUrl: string;
  vision: string;
  staff: string;
}

export default function AboutUs({
  title,
  description,
  imageUrl,
  vision,
  staff,
}: AboutUsProps) {
  return (
    <div className="space-y-12">
      <header className="relative w-full h-64 sm:h-96 overflow-hidden">
        <Image
          src={imageUrl}
          alt="Nasr International School"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </header>

      <div className="container grid gap-12 px-4 md:px-8">
        <div className="text-center">
          <h2 className="mb-6">{title}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div>
            <h3 className="mb-4">Our Vision</h3>
            <p>{vision}</p>
          </div>

          <div>
            <h3 className="mb-4">Our Staff</h3>
            <p>{staff}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
