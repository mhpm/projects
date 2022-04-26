import { HTMLAttributes, ReactNode } from "react";
import "./Button.css";

export interface Props extends HTMLAttributes<HTMLButtonElement> {

  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label?: string;
  classes?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const sizes = {
  small: "button_small",
  medium: "button_medium",
  large: "button_large",
};

export const Button = ({
  primary = false,
  size = "medium",
  label = "button",
  backgroundColor,
  children,
  classes,
  ...props
}: Props) => {
  const mode = primary ? "button_primary" : "button_secondary";
  const content = label ? label : children;

  return (
    <button
      className={["button", sizes[size], mode, classes].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {content}
    </button>
  );
};
