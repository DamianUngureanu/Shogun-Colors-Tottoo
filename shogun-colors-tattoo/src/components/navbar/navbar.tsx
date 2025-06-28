import React from "react";
import NavbarDesktop from "./navbar-desktop";
import { Language } from "@/languages/language-type";
import NavbarMobile from "./navbar-mobile";

interface NavbarProps {
  homeText: string;
  aboutText: string;
  galleryText: string;
  questionsText: string;
  contactText: string;
  width: number;
  height: number;
  scrollPosition: number;
  isScrollingUp: boolean;
  language: string;
  setLanguage: (lang: Language) => void;
}

const Navbar = ({
  homeText,
  aboutText,
  galleryText,
  questionsText,
  contactText,
  width,
  height,
  scrollPosition,
  isScrollingUp,
  language,
  setLanguage,
}: NavbarProps) => {
  if (width > 900)
    return (
      <NavbarDesktop
        width={width}
        height={height}
        language={language}
        setLanguage={(lang) => setLanguage(lang)}
        homeText={homeText}
        aboutText={aboutText}
        galleryText={galleryText}
        questionsText={questionsText}
        contactText={contactText}
        scrollPosition={scrollPosition}
        isScrollingUp={isScrollingUp}
      />
    );
  return (
    <NavbarMobile
      width={width}
      height={height}
      language={language}
      setLanguage={(lang) => setLanguage(lang)}
      homeText={homeText}
      aboutText={aboutText}
      galleryText={galleryText}
      questionsText={questionsText}
      contactText={contactText}
    />
  );
};

export default Navbar;
