import React, { useEffect, useState } from "react";
import classes from "./navbar-graphic-design.module.css";
import Eyebrow1 from "@/svgs/eyebrow1";
import classNames from "classnames";

interface NavbarGraphicDesignProps {
  width: number;
  height?: number;
  className?: string;
  [x: string]: any;
}

const NavbarGraphicDesign = ({
  width,
  height,
  className,
  ...rest
}: NavbarGraphicDesignProps) => {
  return (
    <div className={classes.container}>
      <div className={classNames(className && className)}>
        <Eyebrow1
          width={width}
          color={"#fcfdee"}
          className={classes.eyebrow1}
          {...rest}
        />
      </div>
    </div>
  );
};

export default NavbarGraphicDesign;
