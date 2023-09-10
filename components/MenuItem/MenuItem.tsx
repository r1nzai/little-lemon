import { karla, markazi } from "@/fonts";
import { Item } from "@/types/Menu";
import { cx } from "@/utils/cx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Order from "../Icons/Order";

interface MenuItemProps extends Item {}

const MenuItem = (props: MenuItemProps) => {
  return (
    <div className="w-[265px] max-h-[440px] min-h-[440px] rounded-t-md bg-highlight-main">
      <Image
        src={props.image}
        alt={props.title}
        width={265}
        height={185}
        className="rounded-t-md object-cover h-[185px]"
      />
      <div className="p-4 flex flex-col gap-5 h-[255px] relative">
        <div className="flex justify-between items-center mt-2">
          <h3
            className={cx(markazi.className, "font-medium text-2xl leading-5")}
          >
            {props.title}
          </h3>
          <p
            className={cx(
              karla.className,
              "font-bold text-base text-secondary-main",
            )}
          >
            {props.price}
          </p>
        </div>
        <p className={cx(karla.className, "text-base h-[120px]")}>
          {props.desc}
        </p>
        <Link
          href="/order"
          className={cx(
            karla.className,
            "text-base font-bold flex items-center gap-1",
          )}
        >
          Order a delivery <Order />
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
