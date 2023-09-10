/** @format */

import Navigation from "@/components/Navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { markazi } from "@/fonts";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Little Lemon",
  description:
    "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  openGraph: {
    type: "website",
    title: "Little Lemon",
    images: "https://i.ibb.co/qNBQJXW/logo.png",
    description:
      "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center bg-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
