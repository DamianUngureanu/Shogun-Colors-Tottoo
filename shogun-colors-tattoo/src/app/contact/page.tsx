"use client";
import React from "react";
import classes from "./contact.module.css";
import { useLanguage } from "@/languages";
import Navbar from "@/components/navbar";
import PageStarter from "@/components/page-starter";
import Footer from "@/components/footer";
import { Language } from "@/languages/language-type";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import useWindowScroll from "@/hooks/use-window-scroll";
import ContactParagraph from "./contact-paragraph";
import ContactMaps from "./contact-maps";

const Contact = () => {
  const { scrollPosition, isScrollingUp } = useWindowScroll();
  const { width, height } = useWindowDimensions();
  const { t, language, setLanguage } = useLanguage();
  return (
    <main>
      <Navbar
        homeText={t("home")}
        aboutText={t("about")}
        galleryText={t("gallery")}
        questionsText={t("questions")}
        contactText={t("contact")}
        width={width}
        height={height}
        scrollPosition={scrollPosition}
        isScrollingUp={isScrollingUp}
        language={language}
        setLanguage={(lang: Language) => setLanguage(lang)}
      ></Navbar>
      {/* <PageStarter width={width}></PageStarter> */}
      <ContactParagraph
        width={width}
        contactText={t("contact")}
        mediaText={t("media")}
        whatsappText={t("whatsapp")}
        emailText={t("email")}
        locationText={t("location")}
        instagramText={t("instagram")}
        facebookText={t("facebook")}
        tiktokText={t("tiktok")}
        youtubeText={t("youtube")}
      />
      <ContactMaps width={width} height={height} />
      <Footer
        width={width}
        motoText={t("moto")}
        contactText={t("contact")}
        mediaText={t("media")}
        whatsappText={t("whatsapp")}
        emailText={t("email")}
        locationText={t("location")}
        instagramText={t("instagram")}
        facebookText={t("facebook")}
        tiktokText={t("tiktok")}
        youtubeText={t("youtube")}
      ></Footer>
    </main>
  );
};

export default Contact;
