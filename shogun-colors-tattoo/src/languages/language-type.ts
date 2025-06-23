import en from "@/languages/en";

export type TranslationKeys = keyof typeof en;
export type Dictionary = typeof en;
export type Language = "en" | "ro";

export function isLang(value: string): value is Language {
  return value === "ro" || value === "en";
}
