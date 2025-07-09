import React from "react";
import classes from "./other-tattoo.module.css";
import Container from "@/components/container";
import otherTattoos from "@/data/other-tattoo";

interface OtherTattooProps {
  width: number;
  otherTattooText: string;
}

const OtherTattoo = ({ width, otherTattooText }: OtherTattooProps) => {
  return (
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <h1>{otherTattooText}</h1>
      <div className={classes.imagesContainer}>
        {otherTattoos.map((image, index) => (
          <img
            key={`other-tattoo-${index}`}
            src={image.src}
            alt={`Other Tattoo ${index + 1}`}
            className={classes.image}
          />
        ))}
      </div>
    </Container>
  );
};

export default OtherTattoo;
