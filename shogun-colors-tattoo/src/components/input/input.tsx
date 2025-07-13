import React from "react";
import classes from "./input.module.css";
import input from ".";
import classNames from "classnames";

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [x: string]: any;
}
const Input = ({ onChange, className, ...rest }: InputProps) => {
  return (
    <input
      className={classNames(classes.input, className && className)}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
