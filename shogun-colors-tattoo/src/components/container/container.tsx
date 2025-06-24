import React from "react";
import classes from "./container.module.css";
import Corner from "@/svgs/corner";
import { StaticImageData } from "next/image";

interface ContainerProps {
  width: number;
  background?: StaticImageData;
  children?: any;
}

const Container = ({ width, background, children }: ContainerProps) => {
  return (
    <div
      style={background && { backgroundImage: `url(${background.src})` }}
      className={classes.container}
    >
      <Corner width={width / 6} color={"#fff"} className={classes.cornerLeft} />
      <Corner
        width={width / 6}
        color={"#fff"}
        className={classes.cornerRight}
      />
      {children}
    </div>
  );
};

export default Container;
