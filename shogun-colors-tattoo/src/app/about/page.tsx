"use client";
import classes from "./about.module.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PageStarter from "@/components/page-starter";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import useWindowScroll from "@/hooks/use-window-scroll";
import { Language } from "@/languages/language-type";
import React from "react";
import { useLanguage } from "@/languages";
import AboutSection from "./about-section";
import Container from "@/components/container";
import AboutPageData from "@/data/about-page-data";

const About = () => {
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
      <PageStarter
        width={width}
        background={AboutPageData.backgroundImage}
      ></PageStarter>
      <Container
        width={width}
        corners={[true, true, true, true]}
        className={classes.aboutContainer}
      >
        {AboutPageData.about.map((element, index) => {
          return (
            <AboutSection
              key={"about section" + index}
              image={
                element.image && !(element.image instanceof File)
                  ? element.image
                  : undefined
              }
              title={language == "ro" ? element.titleRO : element.titleEN}
              description={
                language == "ro" ? element.descriptionRO : element.descriptionEN
              }
              orientation={element.revers}
            />
          );
        })}
      </Container>

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

export default About;
