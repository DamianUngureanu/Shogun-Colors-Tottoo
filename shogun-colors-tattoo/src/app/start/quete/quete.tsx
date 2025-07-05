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
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <div className={classes.svgContainer}>
        <QueteDesign width={(width * 9) / 10} color={"#fff"} />
        <br />
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <br />
        <QueteDesign width={(width * 9) / 10} color={"#fff"} />
      </div>
    </Container>
  );
};

export default Quete;
