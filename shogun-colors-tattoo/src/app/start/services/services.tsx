import React from "react";
import classes from "./services.module.css";
import Container from "@/components/container";
import Button from "@/components/button";
import Link from "next/link";
import ServicesType from "@/types/services-type";

interface ServicesProps {
  width: number;
  language: "ro" | "en";
  titleText: string;
  descriptionText: string;
  contactText: string;
  servicesData: ServicesType[];
}

const Services = ({
  width,
  titleText,
  descriptionText,
  language,
  contactText,
  servicesData,
}: ServicesProps) => {
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <h1>{titleText}</h1>
      <div className={classes.servicesContainer}>
        {servicesData.map((element, index) => {
          return (
            <div className={classes.serviceContainer} key={"container" + index}>
              <h2 className={classes.nameService} key={"name" + index}>
                {language == "ro" ? element.nameRO : element.nameEN}
              </h2>
              <h2 className={classes.priceService} key={"price" + index}>
                {element.price} lei
              </h2>
              <span
                className={classes.descriptionService}
                key={"description" + index}
              >
                {language == "ro"
                  ? element.descriptionRO
                  : element.descriptionEN}
              </span>
            </div>
          );
        })}
      </div>
      <Link href={"/contact"}>
        <Button>{contactText}</Button>
      </Link>
    </Container>
  );
};

export default Services;
