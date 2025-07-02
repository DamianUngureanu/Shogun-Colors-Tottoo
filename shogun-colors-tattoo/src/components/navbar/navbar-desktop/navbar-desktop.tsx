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
          <button
            style={
              width <= 1350
                ? { fontSize: " var(--font-size-5)" }
                : { fontSize: "50px" }
            }
          >
            {homeText}
          </button>
        </Link>
        <Link href="/">
          <button
            style={
              width <= 1350
                ? { fontSize: " var(--font-size-5)" }
                : { fontSize: "50px" }
            }
          >
            {aboutText}
          </button>
        </Link>
        <Link href="/">
          <button
            style={
              width <= 1350
                ? { fontSize: " var(--font-size-5)" }
                : { fontSize: "50px" }
            }
          >
            {galleryText}
          </button>
        </Link>
        <Link href="/">
          <button
            style={
              width <= 1350
                ? { fontSize: " var(--font-size-5)" }
                : { fontSize: "50px" }
            }
          >
            {questionsText}
          </button>
        </Link>
        <Link href="/">
          <button
            style={
              width <= 1350
                ? { fontSize: " var(--font-size-5)" }
                : { fontSize: "50px" }
            }
          >
            {contactText}
          </button>
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
