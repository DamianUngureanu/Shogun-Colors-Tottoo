import React, { useEffect, useState } from "react";
import classes from "./tattoo-collection.module.css";
import { StaticImageData } from "next/image";
import tattooCollection from "@/data/tattoo-collection";
import Container from "@/components/container";
import Button from "@/components/button";
import classNames from "classnames";

interface TattooCollectionProps {
  tattooColectionText: string;
  width: number;
}

type CollectionEntry = {
  collectionName: string;
  visible: number;
  images: StaticImageData[];
};
const TattooCollection = ({
  tattooColectionText,
  width,
}: TattooCollectionProps) => {
  const [processingTattooCollection, setProcessingTattooCollection] = useState<
    CollectionEntry[]
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const groupImagesByCollection = (
      images: StaticImageData[]
    ): CollectionEntry[] => {
      const collectionsMap = new Map<string, StaticImageData[]>();

      for (const image of images) {
        const srcParts = image.src.split("/");
        const filename = srcParts[srcParts.length - 1]; // ex: sport-cars---aston-martin.jpg

        const [collectionPart] = filename.split("---");

        if (!collectionPart) continue; // skip dacă nu există separatorul

        if (!collectionsMap.has(collectionPart)) {
          collectionsMap.set(collectionPart, []);
        }

        collectionsMap.get(collectionPart)!.push(image);
      }

      // Fiecare entry este [collectionName, images]
      return Array.from(collectionsMap.entries()).map(
        ([collectionName, images]) => ({
          collectionName,
          visible: 3,
          images,
        })
      );
    };
    setProcessingTattooCollection(groupImagesByCollection(tattooCollection));
  }, []);
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
            <h1>{element.collectionName}</h1>
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
            </div>
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
        );
      })}
    </Container>
  );
};

export default TattooCollection;
