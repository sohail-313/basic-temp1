import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import data from "../../../data/data.json";

export default function Gallery() {
  interface GalleryData {
    src: string;
    description: string;
  }

  const galleryData: GalleryData[] = data.galleryData;

  return (
    <section className="px-4 md:px-8 my-10">
      <h2 className="text-xl font-bold text-primary mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.description}
              width={400}
              height={300}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
            />
            {/* Description */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white opacity-0 group-hover:opacity-100 transition duration-300 p-4">
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-8">View More</Button>
    </section>
  );
}
