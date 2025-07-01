import React, { useState } from "react";
import classes from "./colections.module.css";
import ColectionType from "@/types/colection-type";
import Container from "@/components/container";

import background from "@/public/test/colection-background.jpg";
import Button from "@/components/button";
import Link from "next/link";
import Arrow from "@/svgs/arrow";

import { FaDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

interface ColectionsProps {
  titleText: string;
  openText: string;
  width: number;
  colectionMedia: ColectionType[];
  language: "ro" | "en";
}

const Colections = ({
  titleText,
  openText,
  width,
  colectionMedia,
  language,
}: ColectionsProps) => {
  const [cont, setCont] = useState<number>(0);
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${background.src})` }}
      ></div>
      <div className={classes.content}>
        <h1>Colections</h1>
        <span className={classes.contor}>
          {colectionMedia.map((element, index) => {
            if (cont * -1 == index) return <FaDotCircle />;
            else return <FaRegCircle onClick={() => setCont(index * -1)} />;
          })}
        </span>
        <div className={classes.slider}>
          {colectionMedia.map((element, index) => {
            return (
              <div
                className={classes.sliderItem}
                key={index}
                style={{ "--itemIndex": cont + index } as React.CSSProperties}
              >
                <h2>{language == "ro" ? element.titleRo : element.titleEn}</h2>
                <div className={classes.mediaPhotos}>
                  <section>
                    <img
                      src={element.mediaPaths.image1Path}
                      alt="first colection image"
                    />
                  </section>
                  <section>
                    <img
                      src={element.mediaPaths.image2Path}
                      alt="second colection image"
                    />
                  </section>
                  <section>
                    <img
                      src={element.mediaPaths.image3Path}
                      alt="third colection image"
                    />
                  </section>
                </div>
              </div>
            );
          })}
        </div>
        {/* <h1>Colections</h1>
        <h2>Colection 1</h2>
        <div className={classes.mediaPhotos}>
          <section>
            <img src={image1.src} alt="first colection image" />
          </section>
          <section>
            <img src={image2.src} alt="second colection image" />
          </section>
          <section>
            <img src={image3.src} alt="third colection image" />
          </section>
        </div> */}
        <Link href={""}>
          <Button className={classes.openButton}>Open</Button>
        </Link>
        <Arrow
          width={width < 1000 ? width / 10 : 100}
          color={"#ffffff"}
          className={classes.rightArrow}
          onClick={() => {
            cont > colectionMedia.length * -1 + 1 ? setCont(cont - 1) : {};
          }}
        />
        <Arrow
          width={width < 1000 ? width / 10 : 100}
          color={"#ffffff"}
          className={classes.leftArrow}
          onClick={() => (cont < 0 ? setCont(cont + 1) : {})}
        />
      </div>
    </Container>
  );
};

export default Colections;
