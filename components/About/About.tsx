import { karla, markazi } from "@/fonts";
import { cx } from "@/utils/cx";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      className="min-h-screen bg-white px-5 md:px-40 2xl:px-80 flex items-center w-full justify-between flex-col lg:flex-row gap-5 mb-5"
      id="about"
    >
      <div
        className={cx(
          markazi.className,
          "flex flex-col justify-center xl:w-1/2 w-full",
        )}
      >
        <h1 className="text-7xl text-primary-main">Little Lemon</h1>
        <h2 className="text-5xl text-secondary-main">Chicago</h2>
        <p className={cx(karla.className, "text-lg mt-5")}>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
          <br />
          <br />
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className="xl:w-1/2 relative w-full">
        <Image
          className={cx(
            "transition-all duration-500 ease-in-out",
            "xl:-top-20 xl:left-0",
            "object-cover object-right",
            "xl:w-[20dvw] w-full xl:h-[50dvh] rounded-md xl:absolute z-10",
          )}
          src={"/assets/images/about/1.jpg"}
          width={500}
          height={500}
          alt="Mario and Adrian A"
        />
        <Image
          className={cx(
            "transition-all duration-500 ease-in-out",
            "xl:-top-80 xl:left-[200px]",
            "object-cover object-center",
            "xl:w-[20dvw] xl:h-[50dvh] rounded-md absolute hidden xl:block",
          )}
          src={"/assets/images/about/2.jpg"}
          width={500}
          height={500}
          alt="Mario and Adrian B"
        />
      </div>
    </section>
  );
};

export default About;
