import React from "react";
import classes from "./logo-section.module.css";
import logo from "@/public/logo.png";

const LogoSection = () => {
  return (
    <div className={classes.container}>
      <img src={logo.src} alt="" />
    </div>
  );
};

export default LogoSection;
