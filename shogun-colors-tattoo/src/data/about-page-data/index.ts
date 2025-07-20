import AboutPageType from "@/types/about-page-type";
import backgroundImage from "@/public/background-images/about-page-background.jpeg";
import img1 from "@/public/about-images/1-about.jpg";
import img2 from "@/public/about-images/2-about.jpeg";
import img3 from "@/public/about-images/3-about.jpeg";

const AboutPageData: AboutPageType = {
  backgroundImage: backgroundImage,
  about: [
    {
  image: img1,
  titleRO: "Artisttul",
  titleEN: "Artisttul",
  descriptionRO: "ceva fain",
  descriptionEN: "something cool",
  revers: false
},
    {
  image: img2,
  titleRO: "Artist",
  titleEN: "Artist",
  descriptionRO: "ceva fain",
  descriptionEN: "something cool",
  revers: true
},
    {
  image: img3,
  titleRO: "Artist",
  titleEN: "Artist",
  descriptionRO: "ceva fain",
  descriptionEN: "something cool",
  revers: true
},
    {
  image: undefined,
  titleRO: "ee",
  titleEN: "ee",
  descriptionRO: "ee",
  descriptionEN: "ee",
  revers: false
}
  ],
};

export default AboutPageData;