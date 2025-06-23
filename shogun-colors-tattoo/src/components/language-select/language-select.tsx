import React, { useState } from "react";
import classes from "./language-select.module.css";
import classNames from "classnames";
import { Language, isLang } from "@/languages/language-type";

interface LanguageSelectProps {
  options: string[];
  language: string;
  position?: "top" | "bottom";
  className?: any;
  onChage: (lang: Language) => void;
  [x: string]: any;
}

const LanguageSelect = ({
  options,
  className,
  language,
  position,
  onChage,
  ...rest
}: LanguageSelectProps) => {
  const [lang, setLang] = useState(language);
  const handleChange = (value: string) => {
    if (isLang(value)) onChage(value);
  };

  return (
    <select
      name="language"
      className={classNames(
        classes.container,
        className && className,
        position == "bottom" && classes.containerBottom
      )}
      onChange={(value) => handleChange(value.target.value)}
      value={language}
    >
      {options.map((element) => {
        return (
          <option key={element} value={element}>
            {element}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSelect;
