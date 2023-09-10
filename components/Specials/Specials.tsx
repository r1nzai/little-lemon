import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import { Item } from "@/types/Menu";
import MenuItem from "../MenuItem/MenuItem";

const Specials = async () => {
  const specials = (await fetch("http://localhost:3000/api/menu/specials").then(
    (res) => res.json(),
  )) as Item[];
  return (
    <section
      className="w-full px-5 md:px-40 2xl:px-80 mt-40 flex flex-col gap-10 md:scroll-m-32 scroll-m-24"
      id="menu"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold ">This week's specials!</h1>
        <Button>
          <Link href="/menu">Online Menu</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 p-5 place-items-center">
        {specials.map((special) => (
          <MenuItem key={special.title} {...special} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
