import React, { useState } from "react";
import classes from "./service-section.module.css";
import ServicesType from "@/types/services-type";
import Input from "@/components/input";
import Button from "@/components/button";

interface ServiceSectionProps {
  isDeleted: boolean;
  isNew: boolean;
  isModified: boolean;
  service: ServicesType;
  onDelete: () => void;
  onModify: (service: ServicesType) => void;
}

const ServiceSection = ({
  isDeleted,
  isNew,
  isModified,
  service,
  onDelete,
  onModify,
}: ServiceSectionProps) => {
  const [newService, setNewService] = useState<ServicesType>(service);
  const handleChangeData = (
    value: string | number,
    key: keyof ServicesType
  ) => {
    setNewService((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div
      className={classes.container}
      data-status={
        isDeleted
          ? "deleted"
          : isNew
          ? "new"
          : isModified
          ? "modified"
          : "default"
      }
    >
      <label htmlFor="">nume ro</label>
      <Input
        defaultValue={newService.nameRO}
        onChange={(e) => handleChangeData(e.target.value, "nameRO")}
      />
      <label htmlFor="">nume en</label>
      <Input
        defaultValue={newService.nameEN}
        onChange={(e) => handleChangeData(e.target.value, "nameEN")}
      />
      <label htmlFor="">descriere ro</label>
      <Input
        defaultValue={newService.descriptionRO}
        onChange={(e) => handleChangeData(e.target.value, "descriptionRO")}
      />
      <label htmlFor="">descriere en</label>
      <Input
        defaultValue={newService.descriptionEN}
        onChange={(e) => handleChangeData(e.target.value, "descriptionEN")}
      />
      <Button onClick={() => onModify(newService)}>
        Pastreaza modificarile
      </Button>
      <Button onClick={onDelete}>Sterge</Button>
    </div>
  );
};

export default ServiceSection;
