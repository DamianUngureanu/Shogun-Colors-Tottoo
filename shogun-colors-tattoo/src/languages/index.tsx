"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import en from "./en";
import ro from "./ro";
import { Dictionary, Language, TranslationKeys } from "./language-type";

const dictionaries: Record<Language, Dictionary> = { en, ro };

interface I18nContextProps {
  t: (key: TranslationKeys) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ro");
  useEffect(() => {
    const language =
      navigator.language || (navigator.languages && navigator.languages[0]);
    if (language[0] == "e" && language[1] == "n") setLanguage("en");
    else if (language[0] == "r" && language[1] == "o") setLanguage("ro");
    else setLanguage("ro");
  }, []);

  const t = (key: TranslationKeys): string => dictionaries[language][key];

  const value = useMemo(() => ({ t, language, setLanguage }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLanguage must be used within I18nProvider");
  }
  return context;
};
