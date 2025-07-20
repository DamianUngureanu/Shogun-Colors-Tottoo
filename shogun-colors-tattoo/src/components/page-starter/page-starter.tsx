import React from "react";
import classes from "./page-starter.module.css";
import Container from "../container";
import LogoSection from "./logo-section";
import { StaticImageData } from "next/image";

interface PageStarterProps {
  background?: StaticImageData;
  width: number;
}

const PageStarter = ({ background, width }: PageStarterProps) => {
  return (
    <Container
      width={width}
      background={background}
      corners={[false, false, true, true]}
      isBackdrop={true}
      className={classes.container}
    >
      <LogoSection />
      <div className={classes.transferLine}></div>
    </Container>
  );
};

export default PageStarter;
