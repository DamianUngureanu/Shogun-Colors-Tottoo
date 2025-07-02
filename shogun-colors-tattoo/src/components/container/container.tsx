import React from "react";
import classes from "./container.module.css";
import Corner from "@/svgs/corner";
import { StaticImageData } from "next/image";
import classNames from "classnames";

interface ContainerProps {
  width: number;
  background?: StaticImageData;
  corners: boolean[];
  isBackdrop?: boolean;
  className?: string;
  children?: any;
}

const Container = ({
  width,
  background,
  corners,
  isBackdrop = true,
  className,
  children,
}: ContainerProps) => {
  return (
    <div
      style={background && { backgroundImage: `url(${background.src})` }}
      className={classNames(classes.container, className && className)}
    >
      {corners[0] && (
        <Corner
          width={width / 6}
          color={"#fff"}
          className={classes.cornerTopLeft}
        />
      )}
      {corners[1] && (
        <Corner
          width={width / 6}
          color={"#fff"}
          className={classes.cornerTopRight}
        />
      )}
      {corners[2] && (
        <Corner
          width={width / 6}
          color={"#fff"}
          className={classes.cornerBottomLeft}
        />
      )}
      {corners[3] && (
        <Corner
          width={width / 6}
          color={"#fff"}
          className={classes.cornerBottomRight}
        />
      )}
      {children}
    </div>
  );
};

export default Container;
