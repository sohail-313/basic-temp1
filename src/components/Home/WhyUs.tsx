import Image from "next/image";
import React from "react";

// Define the interface for WhyUs component props
interface WhyUsProps {
  title: string;
  description: string;
  imageUrl: string;
  vision: string;
  staff: string;
}

export default function WhyUs({
  title,
  description,
  imageUrl,
  vision,
  staff,
}: WhyUsProps) {
  return (
    <section className="bg-secondary py-12 md:py-20">
      <div className="container grid gap-12 px-4 md:px-8">
        <div className="text-center">
          <h2 className="mb-6">{title}</h2>
          <p className="leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex justify-center md:w-1/2">
            <Image
              src={imageUrl}
              alt="Nasr International School"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
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
    </section>
  );
}
