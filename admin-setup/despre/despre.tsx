import React, { useState } from "react";
import classes from "./despre.module.css";
import Input from "@/components/input";
import AboutPageData from "@/data/about-page-data";
import AboutType from "@/types/about-type";
import AboutPart from "./about-section";
import { handleAboutPageChange } from "../scripts/admin-scripts";
import Button from "@/components/button";
import AboutServerType from "@/types/about-server-type";
type AboutWithFlags = {
  isNew: boolean;
  isDeleted: boolean;
  isModified: boolean;
  about: AboutServerType;
};
const Despre = () => {
  const [startImage, setStartImage] = useState<File | null>(null);
  const [newAbout, setNewAbout] = useState<AboutWithFlags[]>(
    AboutPageData.about.map((about) => ({
      isNew: false,
      isDeleted: false,
      isModified: false,
      about: {
        image: undefined,
        deleteImage: false,
        titleRO: about.titleRO,
        titleEN: about.titleEN,
        descriptionRO: about.descriptionRO,
        descriptionEN: about.descriptionEN,
        revers: about.revers,
      },
    }))
  );
  const handleOnDelete = (index: number) => {
    setNewAbout((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isDeleted: !item.isDeleted } : item
      )
    );
  };
  const handleOnNew = () => {
    const newService: AboutWithFlags = {
      isNew: true,
      isDeleted: false,
      isModified: false,
      about: {
        image: undefined,
        deleteImage: false,
        titleRO: "",
        titleEN: "",
        revers: false,
        descriptionRO: "",
        descriptionEN: "",
      } as AboutServerType,
    };
    setNewAbout((prev) => [...prev, newService]);
  };
  const handleAboutModifing = (newAbout: AboutServerType, index: number) => {
    setNewAbout((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              ...item,
              about: newAbout,
              isModified: true,
            }
          : item
      )
    );
  };
  const handleSave = async () => {
    // Filtrează serviciile care nu sunt șterse și extrage doar obiectul service
    const modifyedAbout = newAbout
      .filter((item) => !item.isDeleted)
      .map((item) => item.about);

    console.log(modifyedAbout);
    await handleAboutPageChange(startImage, modifyedAbout);
  };
  return (
    <div className={classes.container}>
      <label htmlFor="">imaginea de start</label>
      <Input
        type={"file"}
        onChange={(element) => {
          const image = element.target.files?.[0];
          image && setStartImage(image);
        }}
      ></Input>

      {newAbout.map((element, index) => {
        return (
          <AboutPart
            key={"about-part" + index}
            isDeleted={element.isDeleted}
            isModified={element.isModified}
            isNew={element.isNew}
            about={element.about}
            onDelete={() => handleOnDelete(index)}
            onModify={(about) => handleAboutModifing(about, index)}
          />
        );
      })}
      <Button onClick={handleOnNew}>+ Adauga serviciu</Button>
      <br />
      <Button onClick={handleSave}>Salveaza</Button>
    </div>
  );
};

export default Despre;
