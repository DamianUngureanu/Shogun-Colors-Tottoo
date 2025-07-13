import { StaticImageData } from "next/image";
import ServicesType from "./services-type";

type HomePageType = {
  startImage: StaticImageData;
  quote: string;
  services: ServicesType[];
};
export default HomePageType;
