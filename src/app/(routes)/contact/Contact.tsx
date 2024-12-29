import Image from "next/image";
import React from "react";
import { Mail, PhoneCall, MapPin } from "lucide-react";

// Define the interface for the contact data
interface ContactDetails {
  title: string;
  description: string;
  link?: string; // Optional link for phone and email
}

interface ContactProps {
  imageUrl: string;
  contactDetails: ContactDetails[];
}

export default function Contact({ imageUrl, contactDetails }: ContactProps) {
  // Function to render the correct icon based on the title
  const getIcon = (title: string) => {
    switch (title) {
      case "Address":
        return <MapPin className="w-6 h-6" aria-hidden="true" />;
      case "Phone":
        return <PhoneCall className="w-6 h-6" aria-hidden="true" />;
      case "Email":
        return <Mail className="w-6 h-6" aria-hidden="true" />;
      default:
        return null;
    }
  };

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

      {/* Contact Details Section */}
      <section
        className="grid gap-8 px-4 md:grid-cols-3 md:px-8"
        aria-labelledby="contact-section-title"
      >
        <h2 id="contact-section-title" className="sr-only">
          Contact Details
        </h2>
        {contactDetails.map(({ title, description, link }, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 rounded-lg border-l-4 border-secondary"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full text-primary">
                {getIcon(title)} {/* Get the icon based on title */}
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <div>
              {/* Render the description and handle link */}
              {link ? (
                <a href={link} className="underline text-sm">
                  {description}
                </a>
              ) : (
                <p className="text-sm">{description}</p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
