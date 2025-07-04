import React from "react";
import classes from "./loading-screen.module.css";

import { Infinity } from "ldrs/react";
import "ldrs/react/Infinity.css";

const LoadingScreen = () => {
  return (
    <div className={classes.container}>
      <Infinity
        size="55"
        stroke="4"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="1.3"
        color="rgb(153, 10, 15)"
      />
    </div>
  );
};

export default LoadingScreen;

// Default values shown
