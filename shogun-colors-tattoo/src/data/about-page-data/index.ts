import AboutPageType from "@/types/about-page-type";
import img1 from "@/public/about-images/1-about.jpeg";
import img2 from "@/public/about-images/2-about.jpeg";

const AboutPageData: AboutPageType = {
  backgroundImage: undefined,
  about: [
    {
        image: img1,
        titleRO: "artist",
        titleEN: "artist",
        descriptionRO: "artist",
        descriptionEN: "artist",
        revers: false
      },
    {
        image: img2,
        titleRO: "salon",
        titleEN: "salon",
        descriptionRO: "salon",
        descriptionEN: "salon",
        revers: true
      }
  ],
};

export default AboutPageData;