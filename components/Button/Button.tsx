import { cx } from "@/utils/cx";
import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={cx(
        "bg-primary-alt text-black font-bold py-2 px-4 rounded-2xl",
        "hover:bg-primary-main hover:text-white",
        "focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent",
        "transition-colors duration-300",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
