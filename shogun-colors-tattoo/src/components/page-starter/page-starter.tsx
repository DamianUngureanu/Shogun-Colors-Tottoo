import React from "react";
import classes from "./page-starter.module.css";
import background from "@/public/backgound.jpg";
import Container from "../container";
import LogoSection from "./logo-section";

interface PageStarterProps {
  width: number;
}

const PageStarter = ({ width }: PageStarterProps) => {
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
