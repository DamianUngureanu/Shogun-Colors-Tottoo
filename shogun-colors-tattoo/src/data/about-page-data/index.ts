import AboutPageType from "@/types/about-page-type";
import backgroundImage from "@/public/background-images/about-page-background.jpeg";
import img1 from "@/public/about-images/1-artis-picture.jpg";
import img3 from "@/public/about-images/3-artis-picture.jpg";

const AboutPageData: AboutPageType = {
  backgroundImage: backgroundImage,
  about: [
    {
      image: img1,
      titleRO: "Artist",
      titleEN: "Artist",
      descriptionEN: "something cool",
      descriptionRO: "ceva fain",
      revers: false,
    },
    {
      image: undefined,
      titleRO: "Artist",
      titleEN: "Artist",
      descriptionEN: "something cool",
      descriptionRO: "ceva fain",
      revers: true,
    },
    {
      image: img3,
      titleRO: "Artist",
      titleEN: "Artist",
      descriptionEN: "something cool",
      descriptionRO: "ceva fain",
      revers: true,
    },
  ],
};

export default AboutPageData;
