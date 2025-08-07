import Container from "@/components/container";
import React from "react";
import classes from "./events.module.css";
import aboutEvents from "@/data/about-events";

interface EventsProps {
  width: number;
  eventsTitleText: string;
}

const Events = ({ width, eventsTitleText }: EventsProps) => {
  return (
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <h1>{eventsTitleText}</h1>
      <div className={classes.imagesContainer}>
        {aboutEvents.map((image, index) => (
          <img
            key={`about-events-${index}`}
            src={image.src}
            alt={`Other Tattoo ${index + 1}`}
            className={classes.image}
          />
        ))}
        {aboutEvents.map((image, index) => (
          <img
            key={`about-events-${index}`}
            src={image.src}
            alt={`Other Tattoo ${index + 1}`}
            className={classes.image}
          />
        ))}
      </div>
    </Container>
  );
};

export default Events;
