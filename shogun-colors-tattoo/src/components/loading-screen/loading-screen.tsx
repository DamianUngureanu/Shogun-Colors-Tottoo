import React from "react";
import classes from "./loading-screen.module.css";

const LoadingScreen = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loader} />
    </div>
  );
};

export default LoadingScreen;
