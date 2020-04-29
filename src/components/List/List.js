import React from "react";
import { Card, LoadingIndicator } from "../";
import useFetch from "../../utils/useFetch";
import styles from "./List.module.sass";

const List = (props) => {
  const { params } = props;

  const { response, loading, error } = useFetch(
    Object.keys(params).length,
    `${props.vehicles.url}?Page=1`
  );

  if (!response) return true;

  if (loading) {
    return <LoadingIndicator className={`${styles["loading-indicator"]}`} />;
  }

  return (
    <div className={styles["list"]}>
      {response.map((data) => (
        <Card key={data.ID} {...data} />
      ))}
    </div>
  );
};

export default List;
