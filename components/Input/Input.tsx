import { karla } from "@/fonts";
import { cx } from "@/utils/cx";
import React, { HTMLAttributes } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = (props: InputProps) => {
  return (
    <input
      aria-description="An input for the user to enter text"
      className={cx(
        "font-extrabold h-14 text-primary-main bg-highlight-main px-5 rounded-md w-full",
        "focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent",
        karla.className,
      )}
      {...props}
    />
  );
};

export default Input;
