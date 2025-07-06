import React from "react";
import classes from "./contact-paragraph.module.css";
import Container from "@/components/container";
import ImageLink from "@/components/image-link";

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

interface ContactParagraphProps {
  width: number;
  contactText: string;
  mediaText: string;
  whatsappText: string;
  emailText: string;
  locationText: string;
  instagramText: string;
  facebookText: string;
  tiktokText: string;
  youtubeText: string;
}

const ContactParagraph = ({
  width,
  contactText,
  mediaText,
  whatsappText,
  emailText,
  locationText,
  instagramText,
  facebookText,
  tiktokText,
  youtubeText,
}: ContactParagraphProps) => {
  return (
    <Container
      className={classes.container}
      width={width}
      corners={[true, true, true, true]}
    >
      <h1>{contactText}</h1>
      <div className={classes.contactLinksContainer}>
        <ImageLink
          className={classes.contactLinksText}
          link={"https://wa.me/40749034599"}
          icon={<FaWhatsapp size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{whatsappText}</span>
        </ImageLink>
        <ImageLink
          className={classes.contactLinksText}
          link={""}
          icon={<IoMailOutline size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{emailText}</span>
        </ImageLink>
        <ImageLink
          className={classes.contactLinksText}
          link={
            "https://www.google.com/maps/place/Shogun+Colours+Tattoo+Studio/@45.6591119,25.5984127,19.75z/data=!4m6!3m5!1s0x40b35dcb229699ef:0xe45dc4a5b9242bb8!8m2!3d45.6591419!4d25.5986102!16s%2Fg%2F11p105ngbp?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
          }
          icon={<GrMapLocation size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{locationText}</span>
        </ImageLink>
      </div>
      <h1>{mediaText}</h1>
      <div className={classes.contactLinksContainer}>
        <ImageLink
          className={classes.contactLinksText}
          link={"https://www.facebook.com/ShogunTattooBrasov/"}
          icon={<FaFacebookF size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{facebookText}</span>
        </ImageLink>
        <ImageLink
          className={classes.contactLinksText}
          link=""
          icon={<FaTiktok size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{tiktokText}</span>
        </ImageLink>
        <ImageLink
          className={classes.contactLinksText}
          link={"https://www.instagram.com/shoguntattoobrasov/"}
          icon={<FaInstagram size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{instagramText}</span>
        </ImageLink>
        <ImageLink
          className={classes.contactLinksText}
          link={"https://www.youtube.com/@shoguncolourstattoostudiog2911"}
          icon={<FaYoutube size={width <= 768 ? width / 10 : "100px"} />}
        >
          <span>{youtubeText}</span>
        </ImageLink>
      </div>
    </Container>
  );
};

export default ContactParagraph;
