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
    >
      <LogoSection />
    </Container>
  );
};

export default PageStarter;
