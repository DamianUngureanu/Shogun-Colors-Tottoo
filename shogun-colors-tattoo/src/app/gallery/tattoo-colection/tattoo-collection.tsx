import React, { useEffect, useState } from "react";
import classes from "./tattoo-collection.module.css";
import { StaticImageData } from "next/image";

interface TattooCollectionProps {
  tattooCollection: StaticImageData[];
}

type CollectionEntry = [collectionName: string, images: StaticImageData[]];
const TattooCollection = ({ tattooCollection }: TattooCollectionProps) => {
  const [processingTattooCollection, setProcessingTattooCollection] = useState<
    CollectionEntry[]
  >([]);

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

      return Array.from(collectionsMap.entries());
    };
    setProcessingTattooCollection(groupImagesByCollection(tattooCollection));
  }, []);
  return <div>TattooColection</div>;
};

export default TattooCollection;
