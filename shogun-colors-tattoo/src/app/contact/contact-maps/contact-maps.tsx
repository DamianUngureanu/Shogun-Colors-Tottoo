import React from "react";
import classes from "./contact-maps.module.css";
import Container from "@/components/container";

interface ContactMapsProps {
  width: number;
  height: number;
}

const ContactMaps = ({ width, height }: ContactMapsProps) => {
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <iframe
        className={classes.map}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1730.1685601300876!2d25.598409639702528!3d45.658788510037205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35dcb229699ef%3A0xe45dc4a5b9242bb8!2sShogun%20Colours%20Tattoo%20Studio!5e1!3m2!1sro!2sro!4v1751817926048!5m2!1sro!2sro"
        width={"85%"}
        height={height / 1.5}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default ContactMaps;
