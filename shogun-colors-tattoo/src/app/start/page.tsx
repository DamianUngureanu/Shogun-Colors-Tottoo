"use client";
import React from "react";
import classes from "./start.module.css";
import Navbar from "@/components/navbar";
import PageStarter from "@/components/page-starter";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import usePageLoaded from "@/hooks/use-page-loaded";
import { useLanguage } from "@/languages";
import useWindowScroll from "@/hooks/use-window-scroll";
import Colections from "./colections";
import ColectionData from "@/data/colection-data";

const Start = () => {
  const { width, height, isLoading } = useWindowDimensions();
  const { scrollPosition, isScrollingUp } = useWindowScroll();
  const isLoade = usePageLoaded();
  const { t, setLanguage, language } = useLanguage();
  if (isLoading && isLoade) return <div>is loading</div>;
  return (
    <main className={classes.container}>
      <Navbar
        width={width}
        height={height}
        language={language}
        setLanguage={(lang) => setLanguage(lang)}
        homeText={t("home")}
        aboutText={t("about")}
        galleryText={t("gallery")}
        questionsText={t("questions")}
        contactText={t("contact")}
        scrollPosition={scrollPosition}
        isScrollingUp={isScrollingUp}
      />
      <PageStarter width={width} />
      <Colections
        titleText={"buna"}
        openText={""}
        width={width}
        colectionMedia={ColectionData}
        language={language}
      ></Colections>
    </main>
  );
};

export default Start;
