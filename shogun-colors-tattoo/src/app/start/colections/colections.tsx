import React from "react";
import classes from "./colections.module.css";
import ColectionType from "@/types/colection-type";
import Container from "@/components/container";

import background from "@/public/test/colection-background.jpg";
import image1 from "@/public/test/image1.avif";
import image2 from "@/public/test/image2.jpg";
import image3 from "@/public/test/image3.jpg";
import Button from "@/components/button";

interface ColectionsProps {
  titleText: string;
  openText: string;
  width: number;
  colectionMedia: ColectionType[];
}

const Colections = ({
  titleText,
  openText,
  width,
  colectionMedia,
}: ColectionsProps) => {
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background.src})` }}
      >
        {/* <img src={} alt="colection background" /> */}
      </div>
      <div className={classes.content}>
        <h1>Colections</h1>
        <h2>Colection 1</h2>
        <div className={classes.mediaPhotos}>
          <img src={image1.src} alt="first colection image" />
          <img src={image2.src} alt="second colection image" />
          <img src={image3.src} alt="third colection image" />
        </div>
        <Button>Open</Button>
      </div>
    </Container>
  );
};

export default Colections;
