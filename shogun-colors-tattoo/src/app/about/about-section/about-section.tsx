import React from "react";
import classes from "./about-section.module.css";
import { StaticImageData } from "next/image";

interface AboutSectionProps {
  image: StaticImageData;
  title: string;
  description: string;
  orientation?: "default" | "reverse";
  [x: string]: any;
}

const AboutSection = ({
  image,
  title,
  description,
  orientation = "default",
  ...rest
}: AboutSectionProps) => {
  return (
    <section
      className={classes.container}
      data-orientation={orientation}
      {...rest}
    >
      <div className={classes.imageContainer}>
        <img src={image.src} alt={"about image"} />
      </div>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default AboutSection;
