import React from "react";

import styles from "./LoadingIndicator.module.sass";

const LoadingIndicator = ({ className }) => {
  return (
    <div className={`${styles["loading-container"]} ${className}`}>
      <div className={styles["loading-indicator"]}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default LoadingIndicator;
