import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  logoText: string;
  address: string;
  phone: string;
  email: string;
}

export default function Footer({
  logoSrc,
  logoAlt,
  logoText,
  address,
  phone,
  email,
}: FooterProps) {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={40}
                height={40}
                priority
              />
              <span className="font-semibold text-xl">{logoText}</span>
            </Link>
          </div>

          {/* Address Section */}
          <div>
            <p className="text-sm leading-relaxed">{address}</p>
          </div>

          {/* Contact Info Section */}
          <div>
            <p className="text-sm leading-relaxed">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="text-sm leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-secondary/50">
            &copy; {new Date().getFullYear()} {logoText}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
