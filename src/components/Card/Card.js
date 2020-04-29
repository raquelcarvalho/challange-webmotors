import React from "react";

import styles from "./Card.module.sass";

const Card = ({ ...data }) => {
  const { Make, Model, Version, Image, KM, Price, YearModel, YearFab } = data;
  return (
    <div className={styles["card"]}>
      <figure>
        <img src={Image} alt={`${Make} ${Model} - ${Version}`} />
      </figure>
      <div className={styles["content"]}>
        <span className={styles["marca"]}>
          {Make} {Model}
        </span>
        <span className={styles["version"]}>{Version}</span>
        <p className={styles["price"]}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(parseFloat(Price.replace(",", ".")))}
        </p>
      </div>
      <div className={styles["footer"]}>
        <small className={styles["year"]}>
          {YearFab} / {YearModel}
        </small>
        <small className={styles["km"]}>{KM} km</small>
      </div>
    </div>
  );
};

export default Card;
