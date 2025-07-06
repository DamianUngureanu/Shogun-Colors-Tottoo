import React from "react";
import classes from "./image-link.module.css";
import { StaticImageData } from "next/image";
import classNames from "classnames";

interface ImageLinkProps {
  link: string;
  icon: any;
  children: any;
  className?: any;
  [x: string]: any;
}

const ImageLink = ({
  link,
  icon,
  children,
  className,
  ...rest
}: ImageLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className={classNames(classes.container, className && className)}
      {...rest}
    >
      {icon}
      {children}
    </a>
  );
};

export default ImageLink;
