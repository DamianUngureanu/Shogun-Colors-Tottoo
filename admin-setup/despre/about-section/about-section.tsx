import React, { useEffect, useState } from "react";
import classes from "./about-section.module.css";
import AboutType from "@/types/about-type";
import Input from "@/components/input";
import Button from "@/components/button";
import AboutServerType from "@/types/about-server-type";

interface AboutPartProps {
  isDeleted: boolean;
  isNew: boolean;
  isModified: boolean;
  about: AboutServerType;
  onDelete: () => void;
  onModify: (service: AboutServerType) => void;
}

const AboutPart = ({
  isDeleted,
  isNew,
  isModified,
  about,
  onDelete,
  onModify,
}: AboutPartProps) => {
  const [newAbout, setNewAbout] = useState<AboutServerType>(about);
  const handleChangeData = (
    value: string | number | boolean | File | undefined,
    key: keyof AboutServerType
  ) => {
    setNewAbout((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  useEffect(() => {
    console.log(newAbout);
  }, [newAbout]);
  return (
    <div
      className={classes.container}
      data-status={
        isDeleted
          ? "deleted"
          : isModified
          ? "modified"
          : isNew
          ? "new"
          : "default"
      }
    >
      <label htmlFor="">imaginea</label>
      <Input
        type={"file"}
        onChange={(e) => {
          const files = e.target.files;
          files && files[0]
            ? handleChangeData(files[0], "image")
            : handleChangeData(undefined, "image");
        }}
      />
      <label htmlFor="">Sterge imaginea</label>
      <Input
        type={"checkbox"}
        checked={newAbout.deleteImage}
        onChange={(e) => {
          handleChangeData(e.target.checked, "deleteImage");
        }}
      />
      <label htmlFor="">titlu ro</label>
      <Input
        defaultValue={newAbout.titleRO}
        onChange={(e) => handleChangeData(e.target.value, "titleRO")}
      />
      <label htmlFor="">titlu en</label>
      <Input
        defaultValue={newAbout.titleEN}
        onChange={(e) => handleChangeData(e.target.value, "titleEN")}
      />
      <label htmlFor="">descriere ro</label>
      <Input
        defaultValue={newAbout.descriptionRO}
        onChange={(e) => handleChangeData(e.target.value, "descriptionRO")}
      />
      <label htmlFor="">descriere en</label>
      <Input
        defaultValue={newAbout.descriptionEN}
        onChange={(e) => handleChangeData(e.target.value, "descriptionEN")}
      />
      <label htmlFor="">imaginea e pe stanga?</label>
      <Input
        type={"checkbox"}
        checked={newAbout.revers}
        onChange={(e) => handleChangeData(e.target.checked, "revers")}
      />
      <Button onClick={() => onModify(newAbout)}>Pastreaza modificarile</Button>
      <Button onClick={onDelete}>Sterge</Button>
    </div>
  );
};

export default AboutPart;
