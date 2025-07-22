"use client";
import React from "react";
import classes from "./questions.module.css";
import { QuestionPageData } from "@/data/question-page-data";
import useWindowScroll from "@/hooks/use-window-scroll";
import { useWindowDimensions } from "@/hooks/use-window-dimension";
import { useLanguage } from "@/languages";
import Navbar from "@/components/navbar";
import PageStarter from "@/components/page-starter";
import Footer from "@/components/footer";
import { Language } from "@/languages/language-type";
import Container from "@/components/container";
import Question from "./question";

const Questions = () => {
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
        background={QuestionPageData.startingImage}
      ></PageStarter>
      <div className={classes.questionsContainer}>
        {QuestionPageData.questions.map((question, index) => {
          return (
            <Question
              language={language}
              question={question}
              key={"question" + index}
            />
          );
        })}
      </div>
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

export default Questions;
