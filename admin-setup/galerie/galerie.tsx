import React, { useEffect, useRef, useState } from "react";
import classes from "./galerie.module.css";
import Input from "@/components/input";
import Button from "@/components/button";
import {
  handleBestTattoo,
  handleColectionTattoo,
  handleText,
} from "../scripts/admin-scripts";
import bestTattooText from "@/data/best-tattoo-text";
import tattooCollection from "@/data/tattoo-collection";
import CollectionEntryType from "@/types/colection-entry-type";
import ColectionSection from "./colection-section";
import CollectionOutType from "@/types/colection-out-type";

type ProcessingColectionType = {
  isDeleted: boolean;
  isNew: boolean;
  isModified: boolean;
  collectionName: string;
  images: File[];
};

const Galerie = () => {
  const [processingTattooCollection, setProcessingTattooCollection] = useState<
    ProcessingColectionType[]
  >(
    tattooCollection.map((element) => {
      return {
        isDeleted: false,
        isNew: false,
        isModified: false,
        collectionName: element.collectionName,
        images: [],
      };
    })
  );
  useEffect(() => {
    console.log(processingTattooCollection);
  }, [processingTattooCollection]);
  const handleColectionModifing = (
    name: string,
    images: File[],
    index: number
  ) => {
    setProcessingTattooCollection((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              ...item,
              collectionName: name,
              images: images,
              isModified: true,
            }
          : item
      )
    );
  };
  const handleOnDelete = (index: number) => {
    setProcessingTattooCollection((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isDeleted: !item.isDeleted } : item
      )
    );
  };
  const handleOnNew = () => {
    const newService: ProcessingColectionType = {
      isNew: true,
      isDeleted: false,
      isModified: false,
      collectionName: "",
      images: [],
    };
    setProcessingTattooCollection((prev) => [...prev, newService]);
  };

  const bestTattooRef = useRef<HTMLInputElement>(null);
  const [bestTattooTextNew, setBestTattooTextNew] = useState(
    bestTattooText.text
  );
  const handleTextChange = (index: number, value: string) => {
    const updated = [...bestTattooTextNew];
    updated[index] = value;
    setBestTattooTextNew(updated);
  };
  const otherTattooRef = useRef<HTMLInputElement>(null);
  const [bestTattoo, setBestTattoo] = useState([]);
  const [otherTattoo, setOtherTattoo] = useState([]);
  const handleSave = async () => {
    const resultBest = await handleBestTattoo(bestTattoo, "best-tattoo");
    console.log(resultBest);
    const resultOther = await handleBestTattoo(otherTattoo, "other-tattoo");
    console.log(resultOther);
    await handleText(bestTattooTextNew, "best-tattoo-text");
    let first = true;
    processingTattooCollection.forEach(async (element, index) => {
      try {
        if (!element.isDeleted) {
          const resultColection = await handleColectionTattoo(
            element.collectionName,
            Array.from(element.images),
            first
          );
          console.log(resultColection);
          first = true;
        }
      } catch (err) {
        console.log(err);
      }
    });
  };
  useEffect(() => {
    if (bestTattooRef.current) {
      bestTattooRef.current.setAttribute("webkitdirectory", "");
    }
    if (otherTattooRef.current) {
      otherTattooRef.current.setAttribute("webkitdirectory", "");
    }
  }, []);
  function handleChange(e: any, n: number) {
    if (n == 0)
      setBestTattoo(Array.from(e.target.files)); // transformăm în array simplu
    else if (n == 1) setOtherTattoo(Array.from(e.target.files));
  }
  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        <label htmlFor="beste tattoos">Tatuaje top</label>
        <input
          ref={bestTattooRef}
          type="file"
          multiple
          onChange={(e) => handleChange(e, 0)}
        />
        <div className={classes.textareaContainer}>
          <label htmlFor="tattoo1 text">Textul pentru primul tatuaj</label>
          <textarea
            name="tattoo1 text"
            onChange={(e) => handleTextChange(0, e.target.value)}
            defaultValue={bestTattooTextNew[0]}
          />
        </div>
        <div className={classes.textareaContainer}>
          <label htmlFor="tattoo2 text">Textul pentru al doilea tatuaj</label>
          <textarea
            name="tattoo2 text"
            onChange={(e) => handleTextChange(1, e.target.value)}
            defaultValue={bestTattooTextNew[1]}
          />
        </div>
        <div className={classes.textareaContainer}>
          <label htmlFor="tattoo3 text">Textul pentru al treilea tatuaj</label>
          <textarea
            name="tattoo3 text"
            onChange={(e) => handleTextChange(2, e.target.value)}
            defaultValue={bestTattooTextNew[2]}
          />
        </div>
      </div>
      <div className={classes.inputContainer}>
        <label htmlFor="celelalte tatuaje">Celelalte tatuaje</label>
        <input
          ref={otherTattooRef}
          type="file"
          multiple
          onChange={(e) => handleChange(e, 1)}
        />
      </div>

      <div className={classes.colectionContainer}>
        {processingTattooCollection.map((element, index) => {
          return (
            <ColectionSection
              key={"colection" + index}
              isDeleted={element.isDeleted}
              isModified={element.isModified}
              isNew={element.isNew}
              colection={{
                collectionName: element.collectionName,
                images: element.images,
              }}
              onDelete={() => {
                handleOnDelete(index);
              }}
              onModify={(element: CollectionOutType, files: File[]) => {
                handleColectionModifing(element.collectionName, files, index);
              }}
            />
          );
        })}
      </div>
      <Button onClick={handleOnNew}>+ Adauga colectie</Button>
      <br />
      <Button onClick={handleSave}>Salveaza</Button>
    </div>
  );
};

export default Galerie;
