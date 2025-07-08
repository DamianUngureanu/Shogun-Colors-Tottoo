import Image from "next/image";
import styles from "./page.module.css";
import Start from "./start";
import { usePublicImages } from "@/hooks/use-public-images";

export default function Home() {
  const images = usePublicImages("best-tattoo");
  return <Start />;
}
