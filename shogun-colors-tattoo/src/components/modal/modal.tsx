import React from "react";
import classes from "./modal.module.css";
import classNames from "classnames";
import CloseButton from "../close-button";
interface ModalProps {
  children: any;
  className?: string;
  onClose: () => void;
  [x: string]: any;
}

const Modal = ({ children, className, onClose, ...rest }: ModalProps) => {
  return (
    <div className={classes.background}>
      <div
        className={classNames(classes.container, className && className)}
        // onClick={handleOnClose}
        {...rest}
      >
        <CloseButton onClick={onClose} />

        {children}
      </div>
    </div>
  );
};

export default Modal;
