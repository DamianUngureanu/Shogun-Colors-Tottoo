import React, { useState } from "react";
import classes from "./navbar-phone.module.css";
import LanguageSelect from "../../language-select";
import { Language } from "@/languages/language-type";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import classNames from "classnames";

interface NavbarPhoneProps {
  homeText: string;
  questionsText: string;
  aboutText: string;
  contactText: string;
  galleryText: string;
  language: "ro" | "en";
  setLanguage: (value: "ro" | "en") => void;
}

const NavbarPhone = ({
  homeText,
  questionsText,
  aboutText,
  contactText,
  galleryText,
  language,
  setLanguage,
}: NavbarPhoneProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <IoMenu className={classes.menuButton} onClick={() => setIsOpen(true)} />
      <nav
        className={classNames(
          classes.container,
          !isOpen && classes.containerClose
        )}
      >
        <Link href={"/"}>
          <button>
            <h2>{homeText}</h2>
          </button>
        </Link>
        <Link href={"/about"}>
          <button>
            <h2>{aboutText}</h2>
          </button>
        </Link>
        <Link href={"/gallery"}>
          <button>
            <h2>{galleryText}</h2>
          </button>
        </Link>
        <Link href={"/questions"}>
          <button>
            <h2>{questionsText}</h2>
          </button>
        </Link>
        <Link href={"/contact"}>
          <button>
            <h2>{contactText}</h2>
          </button>
        </Link>
        <IoClose
          className={classes.closeButton}
          onClick={() => setIsOpen(false)}
        />
        <LanguageSelect
          options={["ro", "en"]}
          language={language}
          onChage={(value) => setLanguage(value)}
          position="bottom"
        ></LanguageSelect>
      </nav>
    </>
  );
};

export default NavbarPhone;
