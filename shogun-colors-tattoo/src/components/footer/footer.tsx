import React from "react";
import classes from "./footer.module.css";
import logo from "@/public/logo.png";

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

interface FooterProps {
  width: number;
  motoText: string;
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

const Footer = ({
  width,
  motoText,
  contactText,
  mediaText,
  whatsappText,
  emailText,
  locationText,
  facebookText,
  youtubeText,
  tiktokText,
  instagramText,
}: FooterProps) => {
  return (
    <footer className={classes.container}>
      <h1>{motoText}</h1>
      <section>
        <div className={classes.logoContainer}>
          <img src={logo.src} alt="Shogun Colours Tattoo Logo" />
        </div>
        <div className={classes.contactContainer}>
          <h2>{contactText}</h2>
          <a href="https://wa.me/40749034599" target="_blank">
            <FaWhatsapp />
            {whatsappText}
          </a>
          <a href="" target="_blank">
            <IoMailOutline />
            {emailText}
          </a>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Shogun+Colours+Tattoo+Studio/@45.6591119,25.5984127,19.75z/data=!4m6!3m5!1s0x40b35dcb229699ef:0xe45dc4a5b9242bb8!8m2!3d45.6591419!4d25.5986102!16s%2Fg%2F11p105ngbp?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
          >
            <GrMapLocation />
            {locationText}
          </a>
        </div>
        <div className={classes.mediaContainer}>
          <h2>{mediaText}</h2>
          <a
            href="https://www.facebook.com/ShogunTattooBrasov/"
            target="_blank"
          >
            <FaFacebookF />
            {facebookText}
          </a>
          <a
            href="https://www.tiktok.com/@shoguntattoobv?lang=ro-RO"
            target="_blank"
          >
            <FaTiktok />
            {tiktokText}
          </a>
          <a
            href="https://www.instagram.com/shoguntattoobrasov/"
            target="_blank"
          >
            <FaInstagram />
            {instagramText}
          </a>
          <a
            href="https://www.youtube.com/@shoguncolourstattoostudiog2911"
            target="_blank"
          >
            <FaYoutube />
            {youtubeText}
          </a>
        </div>
        <div className={classes.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.525960497389!2d25.598412653036984!3d45.65911194531101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35dcb229699ef%3A0xe45dc4a5b9242bb8!2sShogun%20Colours%20Tattoo%20Studio!5e0!3m2!1sro!2sro!4v1751733572595!5m2!1sro!2sro"
            width={width > 768 ? "400" : "100%"}
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className={classes.poweredBy}>- Shogun Colours Tattoo -</div>
    </footer>
  );
};

export default Footer;
