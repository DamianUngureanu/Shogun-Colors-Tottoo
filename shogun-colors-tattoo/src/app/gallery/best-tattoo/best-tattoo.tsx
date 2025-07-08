import React from "react";
import classes from "./best-tattoo.module.css";
import { StaticImageData } from "next/image";
import Container from "@/components/container";

interface BestTattooProps {
  width: number;
  images: StaticImageData[];
  bestTattooText: string;
}

const BestTattoo = ({ width, images, bestTattooText }: BestTattooProps) => {
  return (
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <h1>{bestTattooText}</h1>
      <div className={classes.bestTattooContainer}>
        {images.map((image, index) => (
          <div key={index} className={classes.imageContainer}>
            <img
              src={image.src}
              alt={`Best Tattoo ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </div>
      <div></div>
    </Container>
  );
};

export default BestTattoo;
