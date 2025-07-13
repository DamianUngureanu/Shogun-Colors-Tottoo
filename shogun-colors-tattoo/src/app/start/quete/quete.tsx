import React from "react";
import classes from "./quete.module.css";
import Container from "@/components/container";
import QueteDesign from "@/svgs/quete-design";

interface QueteProps {
  width: number;
  queteText: string;
}

const Quete = ({ width, queteText }: QueteProps) => {
  return (
    <div className={classes.svgContainer}>
      <QueteDesign width={(width * 7) / 10} color={"#fff"} />
      <br />
      <h1>{queteText}</h1>
      <br />
      <QueteDesign width={(width * 7) / 10} color={"#fff"} />
    </div>
  );
};

export default Quete;
