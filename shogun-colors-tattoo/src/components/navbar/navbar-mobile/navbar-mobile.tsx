import React, { useState } from "react";
import classes from "./navbar-mobile.module.css";
import { Language } from "@/languages/language-type";
import Link from "next/link";
import LanguageSelect from "@/components/language-select";
import NavbarGraphicDesign from "../navbar-graphic-design";
import CloseIconProps from "@/svgs/close-icon";
import classNames from "classnames";

interface NavbarMobileProps {
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

const NavbarMobile = ({
  homeText,
  aboutText,
  galleryText,
  questionsText,
  contactText,
  width,
  height,
  language,
  setLanguage,
}: NavbarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={classNames(
        classes.container,
        !isOpen && classes.closeContainer
      )}
    >
      <nav>
        <CloseIconProps
          width={40}
          color={"#fcfdee"}
          className={classes.closeIcon}
          onClick={() => setIsOpen(false)}
        />
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
          position="bottom"
        />
      </nav>
      <NavbarGraphicDesign
        width={width}
        className={classNames(
          classes.eyebrow1,
          !isOpen && classes.closeEyebrow1
        )}
        onClick={() => setIsOpen(true)}
      />
    </header>
  );
};

export default NavbarMobile;
