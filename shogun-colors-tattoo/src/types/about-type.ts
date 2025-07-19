import { StaticImageData } from "next/image";

type AboutType = {
  image: StaticImageData | undefined | File;
  titleRO: string;
  titleEN: string;
  descriptionRO: string;
  descriptionEN: string;
  revers: boolean;
};

export default AboutType;
