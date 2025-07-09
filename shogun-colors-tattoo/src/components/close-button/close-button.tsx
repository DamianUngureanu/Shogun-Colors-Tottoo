import React from "react";
import classes from "./close-button.module.css";
import { IoClose } from "react-icons/io5";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return <IoClose className={classes.closeButton} onClick={onClick} />;
};

export default CloseButton;
