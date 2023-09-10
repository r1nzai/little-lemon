import { karla, markazi } from "@/fonts";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { cx } from "@/utils/cx";

const Hero = () => {
  return (
    <section
      className="h-[400px] bg-primary-main w-full px-5 md:px-40 2xl:px-80 relative flex items-center"
      aria-description="A hero section with a background image of a plate of food and a title"
    >
      <div className="flex flex-col justify-center w-[350px] max-h-[400px] overflow-hidden">
        <h1 className={cx(markazi.className, "text-7xl text-primary-alt")}>
          Little Lemon
        </h1>
        <h2 className={cx(markazi.className, "text-5xl text-white")}>
          Chicago
        </h2>
        <p className={cx(karla.className, "text-white text-2xl mt-5")}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button className="mt-5 w-3/4">
          <Link href="/reservations">Reserve a Table</Link>
        </Button>
      </div>
      <Image
        src="/assets/images/hero.jpg"
        alt="Food"
        width={342}
        height={517}
        className="h-[450px] w-[450px] object-cover rounded-md absolute top-5 right-72 2xl:block hidden"
      />
    </section>
  );
};

export default Hero;
