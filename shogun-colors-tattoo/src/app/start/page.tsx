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
import Projects from "./projects";

import bestImage1 from "@/public/best-tattoo/best-tattoo-1.webp";
import bestImage2 from "@/public/best-tattoo/best-tattoo-2.jpg";
import bestImage3 from "@/public/best-tattoo/best-tattoo-3.webp";
import LoadingScreen from "@/components/loading-screen";
import Quete from "./quete";
import Services from "./services";
import Footer from "@/components/footer";

const Start = () => {
  const { width, height, isLoading } = useWindowDimensions();
  const { scrollPosition, isScrollingUp } = useWindowScroll();
  const isLoade = usePageLoaded();
  const { t, setLanguage, language } = useLanguage();
  if (isLoading || isLoade) return <LoadingScreen />;
  else
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
          titleText={t("collections")}
          openText={t("open")}
          width={width}
          colectionMedia={ColectionData}
          language={language}
        ></Colections>
        <Projects
          moreText={t("more")}
          width={width}
          bestImage1={bestImage1}
          bestImage2={bestImage2}
          bestImage3={bestImage3}
          image1Story={"rwgver"}
          image2Story={"wrvwrgw"}
          image3Story={"wgwrgwgr"}
        />
        <Quete width={width} queteText={"citat ;aksjngiks  fkwebvush"} />
        <Services
          width={width}
          language={language}
          titleText={t("services")}
          descriptionText={"descriereeeee"}
          contactText={t("contact")}
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
          youtubeText={t("youtube")}
          tiktokText={t("tiktok")}
        />
      </main>
    );
};

export default Start;
