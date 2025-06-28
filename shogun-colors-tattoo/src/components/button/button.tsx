import React from "react";
import classes from "./button.module.css";
import classNames from "classnames";

interface ButtonProps {
  className?: string;
  children: any;
  [x: string]: any;
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(classes.container, className && className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
