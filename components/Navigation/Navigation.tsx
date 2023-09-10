"use client";
import { karla } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "../Icons/Hamburger";
import Basket from "../Icons/Basket";
import { cx } from "@/utils/cx";
type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [_, setPrevScrollPos] = useState<number>(null as any);

  const handleScroll = () => {
    const nav = navRef.current;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    setPrevScrollPos((prevState) => {
      if (!nav) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        nav.style.transform = "translateY(-200px)";
      } else {
        nav.style.transform = "translateY(0)";
      }
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className="flex md:h-32 h-24 items-center gap-10 lg:justify-between bg-white w-full px-5 md:px-40 2xl:px-80 transition-transform duration-300 sticky top-0 z-50"
      ref={navRef}
    >
      <button
        className="flex items-center justify-center w-10 h-10 text-primary-main p-1 rounded  hover:bg-primary-main hover:text-white lg:hidden"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Hamburger />
      </button>
      <Image
        src="/assets/logo.png"
        width={200}
        height={55}
        className="self-center"
        alt="Little Lemon Logo"
      />
      <ul
        className={cx(
          karla.className,
          "gap-7 items-center font-extrabold text-xl hidden lg:flex",
        )}
      >
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/#about">About</Link>
        </li>
        <li className="">
          <Link href="/#menu">Menu</Link>
        </li>
        <li className="">
          <Link href="/reservations">Reservations</Link>
        </li>
        <li className="">
          <Link href="/order">Order Online</Link>
        </li>
        <li className="">
          <Link href="/login">Login</Link>
        </li>
      </ul>

      {showMenu && (
        <ul
          className={cx(
            karla.className,
            "items-center font-extrabold text-xl flex flex-col absolute top-24 right-0 bg-white w-full md:hidden",
          )}
        >
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/#about">About</Link>
          </li>
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/#menu">Menu</Link>
          </li>
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/reservations">Reservations</Link>
          </li>
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/order">Order Online</Link>
          </li>
          <li className="hover:bg-primary-main hover:text-white w-full h-fit p-5 text-center">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
