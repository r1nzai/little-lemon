import { karla } from "@/fonts";
import { cx } from "@/utils/cx";
import React from "react";

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}
interface SelectOptionProps
  extends React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {}
const Select = (props: SelectProps) => {
  return (
    <select
      className={cx(
        "font-extrabold h-14 text-primary-main bg-highlight-main px-5 rounded-md w-full",
        "focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent",
        karla.className,
      )}
      {...props}
    >
      {props.children}
    </select>
  );
};
const Option = (props: SelectOptionProps) => {
  return (
    <option
      className={cx(
        "font-extrabold h-14 text-primary-main bg-highlight-main px-5 rounded-md",
        "focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent",
        "checked:bg-primary-main checked:text-white",
        karla.className,
      )}
      {...props}
    >
      {props.children}
    </option>
  );
};
Object.assign(Select, { Option });
export default Select as typeof Select & { Option: typeof Option };
