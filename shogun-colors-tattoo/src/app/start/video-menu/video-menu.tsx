import React, { useState } from "react";
import classes from "./video-menu.module.css";
import CloseButton from "@/components/close-button";
import VideosData from "@/data/videos-data";
import classNames from "classnames";

interface VideoMenuProps {
  videosText: string;
}

const VideoMenu = ({ videosText }: VideoMenuProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className={classes.startVideo} onClick={() => setOpenMenu(true)}>
        <iframe
          width="100%"
          height="100%"
          src={
            "https://www.youtube.com/embed/LUCs1yydgtQ?mute=1&autoplay=1&loop=1&playlist=LUCs1yydgtQ"
          }
          title="YouTube Shorts"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div
        className={classNames(
          classes.background,
          !openMenu && classes.closeBackground
        )}
        onClick={() => setOpenMenu(false)}
      ></div>
      <div className={classNames(classes.menu, !openMenu && classes.menuClose)}>
        <CloseButton onClick={() => setOpenMenu(false)}></CloseButton>
        <h2>{videosText}</h2>
        <div className={classes.videosContainer}>
          {VideosData.map((element, index) => {
            return (
              <div className={classes.videoContainer} key={"video" + index}>
                <iframe
                  width="100%"
                  height="100%"
                  src={element}
                  title="YouTube Shorts"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoMenu;
