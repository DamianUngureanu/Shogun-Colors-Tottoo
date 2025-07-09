import styles from "./page.module.css";
import Start from "./start";
import { usePublicImages } from "@/hooks/use-public-images";

export default function Home() {
  usePublicImages("best-tattoo");
  usePublicImages("tattoo-collection");
  usePublicImages("other-tattoo");

  return <Start />;
}
