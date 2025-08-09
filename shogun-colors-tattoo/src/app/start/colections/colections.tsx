import React, { useEffect, useRef, useState } from "react";
import classes from "./colections.module.css";
import ColectionType from "@/types/colection-type";
import Container from "@/components/container";

import Button from "@/components/button";
import Link from "next/link";

import { FaDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import CollectionEntryType from "@/types/colection-entry-type";
import { MdArrowForwardIos } from "react-icons/md";
import { useMouseSlide } from "@/hooks/use-mouse-slide";
import { StaticImageData } from "next/image";

interface ColectionsProps {
  titleText: string;
  openText: string;
  width: number;
  colectionMedia: StaticImageData[];
  language: "ro" | "en";
}
function groupInChunks<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i + chunkSize <= 15; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const Colections = ({
  titleText,
  openText,
  width,
  colectionMedia,
  language,
}: ColectionsProps) => {
  const Slider = useRef<HTMLDivElement | null>(null);
  const slide = useMouseSlide(Slider.current);
  const [slideMobileOpen, setSlideMobileOpen] = useState<boolean>(true);
  const [cont, setCont] = useState<number>(0);
  const [processingTattooCollection, setProcessingTattooCollection] = useState<
    StaticImageData[][]
  >(groupInChunks(colectionMedia, 3));

  useEffect(() => {
    if (width < 768) {
      if (slide.xSlide == -1 && slideMobileOpen) {
        cont > processingTattooCollection.length * -1 + 1
          ? setCont(cont - 1)
          : {};
        setSlideMobileOpen(false);
      } else if (slide.xSlide == 1 && slideMobileOpen) {
        cont < 0 ? setCont(cont + 1) : {};
        setSlideMobileOpen(false);
      } else if (slide.xSlide == 0) {
        setSlideMobileOpen(true);
      }
    }
  }, [slide]);
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classes.container}
    >
      <div className={classes.content}>
        {/* <h1>{titleText}</h1> */}
        <span className={classes.contor}>
          {processingTattooCollection.map((element, index) => {
            if (cont * -1 == index) return <FaDotCircle key={index} />;
            else
              return (
                <FaRegCircle onClick={() => setCont(index * -1)} key={index} />
              );
          })}
        </span>
        <div className={classes.sliderContainer} ref={Slider}>
          <div className={classes.slider}>
            {processingTattooCollection.map((element, index) => {
              return (
                <div
                  className={classes.sliderItem}
                  key={index}
                  style={{ "--itemIndex": cont + index } as React.CSSProperties}
                >
                  {/* <p>{element.collectionName}</p> */}
                  <div className={classes.mediaPhotos}>
                    {element.map((e, i) => {
                      if (i < 3)
                        return (
                          <section key={"colection images" + i}>
                            <img src={e.src} alt={"colection image" + i} />
                          </section>
                        );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <Arrow
            width={width < 1000 ? width / 10 : 100}
            color={"#ffffff"}
            className={classes.rightArrow}
            onClick={() => {
              cont > colectionMedia.length * -1 + 1 ? setCont(cont - 1) : {};
            }}
          /> */}
          <MdArrowForwardIos
            className={classes.rightArrow}
            size={width < 1000 ? width / 10 : 100}
            onClick={() => {
              cont > processingTattooCollection.length * -1 + 1
                ? setCont(cont - 1)
                : {};
            }}
          />
          <MdArrowForwardIos
            className={classes.leftArrow}
            size={width < 1000 ? width / 10 : 100}
            onClick={() => (cont < 0 ? setCont(cont + 1) : {})}
          />
          {/* <Arrow
            width={width < 1000 ? width / 10 : 100}
            color={"#ffffff"}
            className={classes.leftArrow}
            onClick={() => (cont < 0 ? setCont(cont + 1) : {})}
          /> */}
        </div>
        <Link href={"/gallery"}>
          <Button className={classes.openButton}>{openText}</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Colections;
