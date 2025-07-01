import image1 from "@/public/test/image1.avif";
import image2 from "@/public/test/image2.jpg";
import image3 from "@/public/test/image3.jpg";
import ColectionType from "@/types/colection-type";
const ColectionData: ColectionType[] = [
  {
    id: 0,
    titleRo: "colectie1",
    titleEn: "colectie1",
    backgroundPath: "",
    mediaPaths: {
      image1Path: image1.src,
      image2Path: image2.src,
      image3Path: image3.src,
    },
  },
  {
    id: 0,
    titleRo: "colectie2",
    titleEn: "colectie2",
    backgroundPath: "",
    mediaPaths: {
      image1Path: image1.src,
      image2Path: image2.src,
      image3Path: image3.src,
    },
  },
  {
    id: 0,
    titleRo: "colectie3",
    titleEn: "colectie3",
    backgroundPath: "",
    mediaPaths: {
      image1Path: image1.src,
      image2Path: image2.src,
      image3Path: image3.src,
    },
  },
];
export default ColectionData;
