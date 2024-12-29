import Image from "next/image";
import React from "react";

// Define the interface for Admissions component props
interface AdmissionsProps {
  imageUrl: string;
  title: string;
  description: string;
  guidelines: string[];
}

export default function Admissions({
  imageUrl,
  title,
  description,
  guidelines,
}: AdmissionsProps) {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
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

      {/* Admission Information Section */}
      <section className="px-4 md:px-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>

        {/* Guidelines */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Guidelines</h3>
          <p className="text-sm text-gray-700 mb-4">
            Please read these instructions carefully before filling the admission form:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {guidelines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
