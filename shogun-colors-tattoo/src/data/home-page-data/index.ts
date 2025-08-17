import startImage from "@/public/background-images/home-page-background.jpeg";
import HomePageType from "@/types/home-page-type";

export const HomePageData: HomePageType = {
  startImage: startImage,
  quote: "citat de la salonss",
  services: [
    {
      nameRO: "Tatuaje artistice",
      nameEN: "Artistic tattoo",
      descriptionRO: "Tatuaje artistice, personalizate",
      descriptionEN: "Artistic tattoo, custome",
    },
    {
      nameRO: "Tatuaje de acoperire",
      nameEN: "Cover-up",
      descriptionRO: "Acoperim tatuaje vechi sau nedorite",
      descriptionEN: "We cover old or unwanted tattoos",
    },
    {
      nameRO: "Tatuaje cosmetice",
      nameEN: "Cosmetic tattoo",
      descriptionRO: "Tatuaje minore, estetice",
      descriptionEN: "Small, estetic tattoos",
    },
    {
      nameRO: "Consultanta",
      nameEN: "Consultation",
      descriptionRO:
        "Putem avea o discutie despre ce iti doresti, personalizand tatajul si sa decidem pretul pentru el",
      descriptionEN:
        "We can have a conversation about what you want, personalize the tattoo, and decide on the price together.",
    },
  ],
};
