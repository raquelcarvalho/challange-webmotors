import React from "react";
import styles from "./TabItem.module.sass";

const TabItem = ({
  icon = "",
  title = "",
  subtitle = "",
  onItemClicked = () => console.error("You passed no action to the component"),
  isActive = false,
}) => {
  return (
    <div
      className={
        isActive
          ? styles["tab-item"]
          : `${styles["tab-item"]} ${styles["tab-item--inactive"]}`
      }
      onClick={onItemClicked}
    >
      <img
        className={styles["tab-item__icon"]}
        src={require(`../../assets/${icon}`)}
        alt={title}
      />

      <p className={styles["tab-item__text"]}>
        <span className={styles["tab-item__subtitle"]}>{subtitle}</span>
        <small className={styles["tab-item__title"]}>{title}</small>
      </p>
    </div>
  );
};

export default TabItem;
