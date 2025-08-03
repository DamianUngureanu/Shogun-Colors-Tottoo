import React, { useEffect, useState } from "react";
import classes from "./tattoo-collection.module.css";
import { StaticImageData } from "next/image";
import tattooCollection from "@/data/tattoo-collection";
import Container from "@/components/container";
import Button from "@/components/button";
import classNames from "classnames";
import CollectionEntryType from "@/types/colection-entry-type";

interface TattooCollectionProps {
  tattooColectionText: string;
  width: number;
}

const TattooCollection = ({
  tattooColectionText,
  width,
}: TattooCollectionProps) => {
  const [processingTattooCollection, setProcessingTattooCollection] =
    useState<CollectionEntryType[]>(tattooCollection);

  // Functie pentru a modifica visible pentru o colectie
  const addVisibleImages = (collectionName: string, number: number) => {
    setProcessingTattooCollection((prev) =>
      prev.map((entry) => {
        if (entry.collectionName !== collectionName) return entry;
        let newVisible = entry.visible + number;
        // Nu scade sub 4
        if (number < 0) {
          if (entry.visible <= 3) newVisible = 3;
          else if (newVisible < 3) newVisible = 3;
        }
        // Nu creste peste numarul de imagini
        if (number > 0) {
          if (entry.visible >= entry.images.length)
            newVisible = entry.images.length;
          else if (newVisible > entry.images.length)
            newVisible = entry.images.length;
        }
        return { ...entry, visible: newVisible };
      })
    );
  };

  return (
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <h1>{tattooColectionText}</h1>
      {processingTattooCollection.map((element, index) => {
        return (
          <div
            className={classes.collectionContainer}
            key={element.collectionName + index}
          >
            <h2>{element.collectionName}</h2>
            <br />
            <div className={classes.imagesContainer}>
              {element.images.map((image, imgIndex) => (
                <img
                  key={`${element.collectionName}-${imgIndex}`}
                  src={image.src}
                  alt={"Tattoo Image"}
                  className={classNames(
                    classes.image,
                    imgIndex >= element.visible && classes.imageHidden
                  )}
                />
              ))}
              <div className={classes.buttonsContainer}>
                <Button
                  onClick={() => addVisibleImages(element.collectionName, -4)}
                >
                  hidden
                </Button>
                <Button
                  onClick={() => addVisibleImages(element.collectionName, 4)}
                >
                  more
                </Button>
              </div>
            </div>
            {/* <div className={classes.buttonsContainer}></div> */}
          </div>
        );
      })}
    </Container>
  );
};

export default TattooCollection;
