import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "School Template",
  description: "A template for landing pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = {
    logoSrc: "/images/40x40.svg",
    logoAlt: "Nasr International School",
    logoText: "Nasr International School",
    address:
      "Survey No. 106/107, Serilingampally, Hyderabad, Telangana, India 500 019",
    phone: "+91 40 2303 1100",
    email: "nasr@gmail.com",
  };

  const navbarData = {
    logoText: "Nasr International School",
    navItems: [
      { label: "About Us", href: "/about-us" },
      { label: "Admissions", href: "/admissions" },
      { label: "Contact", href: "/contact" },
      { label: "Gallery", href: "/gallery" },
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar {...navbarData} />
        <main className="min-h-screen">{children}</main>
        <Footer {...footerData} />
      </body>
    </html>
  );
}
