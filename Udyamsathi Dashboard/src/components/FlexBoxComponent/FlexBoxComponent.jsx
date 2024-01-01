// FlexBoxComponent.jsx

import React from "react";
import styles from "./FlexBoxComponent.module.css";

const FlexBoxComponent = ({ heading, text }) => {
  return (
    <div className={styles.flexContainer}>
      <h1>{heading}</h1>
      <p className={styles.centeredText}>{text}</p>
    </div>
  );
};

export default FlexBoxComponent;
