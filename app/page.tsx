/** @format */

import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Specials from "@/components/Specials/Specials";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}
