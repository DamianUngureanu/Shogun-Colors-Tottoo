import React from "react";
import classes from "./container.module.css";
import Corner from "@/svgs/corner";
import { StaticImageData } from "next/image";

interface ContainerProps {
  width: number;
  background?: StaticImageData;
  corners: boolean[];
  children?: any;
}

const Container = ({
  width,
  background,
  corners,
  children,
}: ContainerProps) => {
  return (
    <div
      style={background && { backgroundImage: `url(${background.src})` }}
      className={classes.container}
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
