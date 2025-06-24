import React from "react";
import classes from "./page-starter.module.css";
import background from "@/public/backgound.jpg";
import Container from "../container";

interface PageStarterProps {
  width: number;
}

const PageStarter = ({ width }: PageStarterProps) => {
  return <Container width={width} background={background}></Container>;
};

export default PageStarter;
