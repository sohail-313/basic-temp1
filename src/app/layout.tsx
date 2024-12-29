import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import data from "../data/data.json";

export const metadata: Metadata = {
  title: "School Template",
  description: "A template for landing pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = data.footerData;
  const navbarData = data.navbarData;

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
