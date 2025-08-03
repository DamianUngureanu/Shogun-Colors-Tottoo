import { StaticImageData } from "next/image";

type CollectionEntryType = {
  collectionName: string;
  visible: number;
  images: StaticImageData[];
};

import img0 from "@/public/tattoo-collection/colectie 1---profile-image1.jpeg";
import img1 from "@/public/tattoo-collection/colectie 1---profile-image2.jpeg";
import img2 from "@/public/tattoo-collection/colectie 1---profile-image3.jpeg";
import img3 from "@/public/tattoo-collection/colectie 1---profile-image4.jpeg";
import img4 from "@/public/tattoo-collection/colectie 1---profile-image5.jpeg";
import img5 from "@/public/tattoo-collection/colectie 1---profile-image6.jpeg";
import img6 from "@/public/tattoo-collection/colectie 1---profile-image7.jpeg";
import img7 from "@/public/tattoo-collection/colectie 1---profile-image8.jpeg";
import img8 from "@/public/tattoo-collection/colectie 1---profile-image9.jpeg";


const collections = [
  {
    collectionName: "colectie 1",
    visible: 3,
    images: [img0, img1, img2, img3, img4, img5, img6, img7, img8],
  },
] as CollectionEntryType[];

export default collections;