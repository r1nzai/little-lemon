import { karla, markazi } from "@/fonts";
import { Testimonial } from "@/types/Testimonial";
import { cx } from "@/utils/cx";
import Image from "next/image";
import React from "react";

const Testimonials = async () => {
  const testimonials = (await fetch("http://localhost:3000/api/testimonials", {
    cache: "no-cache",
  }).then((res) => res.json())) as Testimonial[];
  const ratings = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };
  return (
    <section className="min-h-screen px-5 md:px-40 2xl:px-80 py-40 bg-secondary-main w-full flex flex-col items-center justify-center">
      <h1 className={cx(markazi.className, "md:text-7xl text-5xl text-center")}>
        What our customers say!
      </h1>
      <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-2 gap-5 p-5 place-items-center mt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className={cx(
              "flex flex-col gap-5 min-w-[250px] max-w-[250px] min-h-[400px] p-5 bg-secondary-alt rounded-md",
            )}
          >
            <h3>{ratings[testimonial.rating]}</h3>
            <figure className="flex items-center gap-5">
              <Image
                src={testimonial.picture}
                width={100}
                height={100}
                alt={testimonial.name}
                className="object-cover rounded-full"
              />
              <figcaption className={cx(karla.className, "text-md font-bold")}>
                {testimonial.name}
              </figcaption>
            </figure>
            <blockquote className={cx(karla.className, "text-base")}>
              “{testimonial.comment}”
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
