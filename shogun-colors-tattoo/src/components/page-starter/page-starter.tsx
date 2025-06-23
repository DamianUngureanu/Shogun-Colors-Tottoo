import React from "react";
import classes from "./page-starter.module.css";
import backgound from "@/public/backgound.jpg";

const PageStarter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgound.src})` }}
      className={classes.container}
    ></div>
  );
};

export default PageStarter;
