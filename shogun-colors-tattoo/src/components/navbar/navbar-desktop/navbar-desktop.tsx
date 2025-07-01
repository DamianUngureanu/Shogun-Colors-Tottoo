import React from "react";
import classes from "./navbar-desktop.module.css";
import Link from "next/link";
import NavbarGraphicDesign from "../navbar-graphic-design";
import LanguageSelect from "@/components/language-select";
import { Language } from "@/languages/language-type";
import classNames from "classnames";

interface NavbarDesktopProps {
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

const NavbarDesktop = ({
  homeText,
  aboutText,
  galleryText,
  questionsText,
  contactText,
  width,
  scrollPosition,
  isScrollingUp,
  height,
  language,
  setLanguage,
}: NavbarDesktopProps) => {
  return (
    <header
      className={classNames(
        classes.container,
        scrollPosition > 200 && !isScrollingUp && classes.navHidden
      )}
    >
      <section>
        <NavbarGraphicDesign
          width={950}
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
