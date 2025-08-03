import React, { useEffect, useRef, useState } from "react";
import classes from "./colection-section.module.css";
import AboutType from "@/types/about-type";
import Input from "@/components/input";
import Button from "@/components/button";
import CollectionEntryType from "@/types/colection-entry-type";
import CollectionOutType from "@/types/colection-out-type";

interface ColectionSectionProps {
  isDeleted: boolean;
  isNew: boolean;
  isModified: boolean;
  colection: CollectionOutType;
  onDelete: () => void;
  onModify: (service: CollectionOutType, files: File[]) => void;
}

const ColectionSection = ({
  isDeleted,
  isNew,
  isModified,
  colection,
  onDelete,
  onModify,
}: ColectionSectionProps) => {
  const ColectionTattooRef = useRef<HTMLInputElement>(null);
  const [colectionTattooFiles, setColectionTattooFiles] = useState([]);
  const [newColection, setNewColection] =
    useState<CollectionOutType>(colection);
  const handleChangeData = (
    value: string | number | boolean | File | undefined | File[],
    key: keyof CollectionEntryType
  ) => {
    setNewColection((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  function handleChange(e: any) {
    setColectionTattooFiles(Array.from(e.target.files));
  }
  useEffect(() => {
    if (ColectionTattooRef.current) {
      ColectionTattooRef.current.setAttribute("webkitdirectory", "");
    }
  }, []);
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
      <label htmlFor="">nume colectie</label>
      <Input
        defaultValue={newColection.collectionName}
        onChange={(e) => handleChangeData(e.target.value, "collectionName")}
      />
      <label htmlFor="">descriere ro</label>
      <input
        ref={ColectionTattooRef}
        type="file"
        multiple
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={() => onModify(newColection, colectionTattooFiles)}>
        Pastreaza modificarile
      </Button>
      <Button onClick={onDelete}>Sterge</Button>
    </div>
  );
};

export default ColectionSection;
