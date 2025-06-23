import React from "react";
import classes from "./navbar-desktop.module.css";
import Link from "next/link";
import NavbarGraphicDesign from "../navbar-graphic-design";
import LanguageSelect from "@/components/language-select";
import { Language } from "@/languages/language-type";

interface NavbarDesktopProps {
  homeText: string;
  aboutText: string;
  galleryText: string;
  questionsText: string;
  contactText: string;
  width: number;
  height: number;
  language: string;
  setLanguage: (lang: Language) => void;
}

const NavbarDesktop = ({
  homeText,
  aboutText,
  galleryText,
  questionsText,
  contactText,
  width,
  height,
  language,
  setLanguage,
}: NavbarDesktopProps) => {
  return (
    <header className={classes.container}>
      <section>
        <NavbarGraphicDesign
          width={1000}
          height={height}
          className={classes.eyebrow1}
        />
      </section>
      <nav>
        <Link href="/">
          <button>{homeText}</button>
        </Link>
        <Link href="/">
          <button>{aboutText}</button>
        </Link>
        <Link href="/">
          <button>{galleryText}</button>
        </Link>
        <Link href="/">
          <button>{questionsText}</button>
        </Link>
        <Link href="/">
          <button>{contactText}</button>
        </Link>
        <LanguageSelect
          options={["ro", "en"]}
          language={language}
          onChage={(lang) => setLanguage(lang)}
        />
      </nav>
    </header>
  );
};

export default NavbarDesktop;
