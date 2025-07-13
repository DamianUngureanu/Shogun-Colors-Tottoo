import React, { useEffect, useState } from "react";
import classes from "./colections.module.css";
import ColectionType from "@/types/colection-type";
import Container from "@/components/container";

import Button from "@/components/button";
import Link from "next/link";
import Arrow from "@/svgs/arrow";

import { FaDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import CollectionEntryType from "@/types/colection-entry-type";

interface ColectionsProps {
  titleText: string;
  openText: string;
  width: number;
  colectionMedia: CollectionEntryType[];
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
  const [processingTattooCollection, setProcessingTattooCollection] =
    useState<CollectionEntryType[]>(colectionMedia);

  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <div className={classes.content}>
        <h1>{titleText}</h1>
        <span className={classes.contor}>
          {colectionMedia.map((element, index) => {
            if (cont * -1 == index) return <FaDotCircle key={index} />;
            else
              return (
                <FaRegCircle onClick={() => setCont(index * -1)} key={index} />
              );
          })}
        </span>
        <div className={classes.sliderContainer}>
          <div className={classes.slider}>
            {processingTattooCollection.map((element, index) => {
              return (
                <div
                  className={classes.sliderItem}
                  key={index}
                  style={{ "--itemIndex": cont + index } as React.CSSProperties}
                >
                  <h2>{element.collectionName}</h2>
                  <div className={classes.mediaPhotos}>
                    {element.images.map((e, i) => {
                      if (i < 3)
                        return (
                          <section key={"colection images" + i}>
                            <img src={e.src} alt={"colection image" + i} />
                          </section>
                        );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
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
        <Link href={"/gallery"}>
          <Button className={classes.openButton}>{openText}</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Colections;
