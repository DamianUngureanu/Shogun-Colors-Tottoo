"use client";
import React from "react";
import classes from "./gallery.module.css";
import Navbar from "@/components/navbar";
import PageStarter from "@/components/page-starter";
import Footer from "@/components/footer";
import useWindowScroll from "@/hooks/use-window-scroll";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import { useLanguage } from "@/languages";
import { Language } from "@/languages/language-type";
import BestTattoo from "./best-tattoo";
import bestTattoo from "@/data/best-tattoo";

const Gallery = () => {
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
      />
      <PageStarter width={width} />
      <BestTattoo
        images={bestTattoo}
        width={width}
        bestTattooText={t("bestTattoos")}
      />
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
      />
    </main>
  );
};

export default Gallery;
