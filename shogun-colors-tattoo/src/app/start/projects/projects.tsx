import React, { useEffect, useState } from "react";
import classes from "./projects.module.css";
import Container from "@/components/container";
import { StaticImageData } from "next/image";
import Button from "@/components/button";
import classNames from "classnames";
import Modal from "@/components/modal";

import bestTattoo from "@/data/best-tattoo";
import bestTattooText from "@/data/best-tattoo-text";

interface ProjectsProps {
  moreText: string;
  image1Story: string;
  image2Story: string;
  image3Story: string;
  width: number;
}

const Projects = ({
  width,
  moreText,
  image1Story,
  image2Story,
  image3Story,
}: ProjectsProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(width <= 768);
  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);
  const [isOpenModal, setIsOpenModal] = useState<number | undefined>(undefined);
  return (
    <Container
      width={width}
      corners={[true, true, true, true]}
      className={classNames(
        isMobile && classes.containerMobile,
        !isMobile && classes.container
      )}
      isBackdrop={false}
    >
      {/* <h1 className={classes.title}>Best Tattoos</h1> */}
      {bestTattoo.map((element, index) => {
        if (index < 3)
          return (
            <section
              className={classes.bestSection}
              style={{ zIndex: index + 1 }}
              key={"best tattoo" + index}
              data-reverse={index % 2 == 0 ? "default" : "reverse"}
            >
              <img src={element.src} alt="best tattoo 1" />
              {!isMobile && <p>{bestTattooText.text[index]}</p>}
              {isMobile && (
                <Button onClick={() => setIsOpenModal(index)}>
                  {moreText}
                </Button>
              )}
            </section>
          );
      })}
      {isOpenModal !== undefined && (
        <Modal onClose={() => setIsOpenModal(undefined)}>buna</Modal>
      )}
      {/* <section style={{ zIndex: 1 }}>
        <img src={bestImage1.src} alt="best tattoo 1" />
        {!isMobile && <p>{image1Story}</p>}
        {isMobile && <Button>{moreText}</Button>}
      </section>
      <section style={{ zIndex: 2 }}>
        <img src={bestImage2.src} alt="best tattoo 2" />
        {!isMobile && <p>{image2Story}</p>}
        {isMobile && <Button>{moreText}</Button>}
      </section> */}
    </Container>
  );
};

export default Projects;
