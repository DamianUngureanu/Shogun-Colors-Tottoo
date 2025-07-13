import React, { useState } from "react";
import classes from "./acasa.module.css";
import Input from "@/components/input";
import { StaticImageData } from "next/image";
import Button from "@/components/button";
import { handleHomePageChange } from "@/scripts/admin-scripts";
import { HomePageData } from "@/data/home-page-data";
import ServicesType from "@/types/services-type";
import ServiceSection from "./service-section";

// Tip pentru array-ul extins
type ServiceWithFlags = {
  isNew: boolean;
  isDeleted: boolean;
  isModified: boolean;
  service: ServicesType;
};
const Acasa = () => {
  const [startImage, setStartImage] = useState<File | null>(null);
  const [quote, setQuote] = useState<String>(HomePageData.quote);

  const [services, setServices] = useState<ServiceWithFlags[]>(
    HomePageData.services.map((service) => ({
      isNew: false,
      isDeleted: false,
      isModified: false,
      service,
    }))
  );
  const handleOnDelete = (index: number) => {
    setServices((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isDeleted: !item.isDeleted } : item
      )
    );
  };
  const handleOnNew = () => {
    const newService: ServiceWithFlags = {
      isNew: true,
      isDeleted: false,
      isModified: false,
      service: {
        nameRO: "",
        nameEN: "",
        price: 0,
        descriptionRO: "",
        descriptionEN: "",
      } as ServicesType,
    };
    setServices((prev) => [...prev, newService]);
  };
  const handleSave = async () => {
    // Filtrează serviciile care nu sunt șterse și extrage doar obiectul service
    const modifyedServices = services
      .filter((item) => !item.isDeleted)
      .map((item) => item.service);

    await handleHomePageChange(startImage, quote, modifyedServices);
  };
  const handleServiceModifing = (newService: ServicesType, index: number) => {
    setServices((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              ...item,
              service: newService,
              isModified: true,
            }
          : item
      )
    );
  };
  return (
    <div className={classes.container}>
      <section>
        <label htmlFor="start-image">Imaginea de start</label>
        <Input
          type="file"
          accept="image/*"
          onChange={(element) =>
            setStartImage(element.target.files?.[0] || null)
          }
        />
        <label htmlFor="quote">Citatul</label>
        <Input
          type="text"
          defaultValue={quote}
          onChange={(element) => setQuote(element.target.value)}
        />
      </section>
      {services.map((element, index) => {
        return (
          <ServiceSection
            key={index}
            isDeleted={element.isDeleted}
            isNew={element.isNew}
            isModified={element.isModified}
            service={element.service}
            onDelete={() => handleOnDelete(index)}
            onModify={(service) => handleServiceModifing(service, index)}
          />
        );
      })}
      <Button onClick={handleOnNew}>+ Adauga serviciu</Button>
      <br />
      <Button onClick={handleSave}>Salveaza</Button>
    </div>
  );
};

export default Acasa;
