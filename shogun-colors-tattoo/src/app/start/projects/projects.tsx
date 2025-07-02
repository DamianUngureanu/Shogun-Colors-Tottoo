import React, { useEffect, useState } from "react";
import classes from "./projects.module.css";
import Container from "@/components/container";
import { StaticImageData } from "next/image";
import Button from "@/components/button";
import classNames from "classnames";

interface ProjectsProps {
  moreText: string;
  image1Story: string;
  image2Story: string;
  image3Story: string;
  width: number;
  bestImage1: StaticImageData;
  bestImage2: StaticImageData;
  bestImage3: StaticImageData;
}

const Projects = ({
  width,
  moreText,
  image1Story,
  image2Story,
  image3Story,
  bestImage1,
  bestImage2,
  bestImage3,
}: ProjectsProps) => {
  const [isMobile, setIsMobile] = useState(width <= 768);
  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classNames(
        isMobile && classes.containerMobile,
        !isMobile && classes.container
      )}
      isBackdrop={false}
    >
      <h1 className={classes.title}>Best Tattoos</h1>
      <section style={{ zIndex: 1 }}>
        <img src={bestImage1.src} alt="best tattoo 1" />
        {!isMobile && <p>{image1Story}</p>}
        {isMobile && <Button>{moreText}</Button>}
      </section>
      <section style={{ zIndex: 2 }}>
        <img src={bestImage2.src} alt="best tattoo 2" />
        {!isMobile && <p>{image2Story}</p>}
        {isMobile && <Button>{moreText}</Button>}
      </section>
      <section style={{ zIndex: 3 }}>
        <img src={bestImage3.src} alt="best tattoo 3" />
        {!isMobile && <p>{image3Story}</p>}
        {isMobile && <Button>{moreText}</Button>}
      </section>
    </Container>
  );
};

export default Projects;
