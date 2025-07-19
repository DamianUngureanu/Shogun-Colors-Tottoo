import { StaticImageData } from "next/image";
import AboutType from "./about-type";

type AboutPageType = {
  backgroundImage: StaticImageData;
  about: AboutType[];
};

export default AboutPageType;
