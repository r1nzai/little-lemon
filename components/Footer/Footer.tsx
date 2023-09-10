import { karla } from "@/fonts";
import { cx } from "@/utils/cx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center min-h-96 bg-primary-main text-white w-full px-5 md:px-40 2xl:px-80"
      aria-description="A footer with links for navigation and contact information"
    >
      <div className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-5 p-5 place-items-center w-full">
        <Image
          src="/assets/images/footer.jpg"
          width={1387}
          height={925}
          alt="footer"
          className="object-cover rounded-md hidden xl:block h-full"
        />
        <nav
          className={cx(
            karla.className,
            "flex-col gap-5 h-full md:flex hidden",
          )}
        >
          <h3 className="text-2xl font-bold">Little Lemon</h3>
          <ul className="flex flex-col gap-5">
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="#about">About</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="#menu">Menu</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="/reservations">Reservations</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="/order">Order Online</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <div className={cx(karla.className, "flex flex-col gap-5 h-full")}>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <address>
            <p>Little Lemon</p>
            <p>331 E LaSalle Street</p>
            <p>Chicago, Illinois</p>
            <p>60602</p>
            <p>USA</p>
          </address>
          <a href="tel:+55-11-9999-9999">+55-11-9999-9999</a>
          <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
        </div>
        <div className={cx(karla.className, "flex flex-col gap-5 h-full")}>
          <h3 className="text-2xl font-bold">Social Media</h3>
          <ul className="flex flex-col gap-5">
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="https://www.facebook.com/">Facebook</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="https://www.instagram.com/">Instagram</Link>
            </li>
            <li className="hover:text-secondary-alt active:text-secondary-main">
              <Link href="https://www.twitter.com/">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-5">
        <p className={cx(karla.className, "text-center")}>
          © 2023 Little Lemon. All rights reserved.
        </p>
        <p className={cx(karla.className, "text-center")}>
          Designed by Parameswar Kishan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
