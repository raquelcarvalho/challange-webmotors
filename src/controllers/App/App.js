import React from "react";
import { renderRoutes, matchRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";

import Header from "./Header/Header";

import styles from "./App.module.sass";

const App = (props) => {
  const { route, history, match } = props;
  const { params } = match;

  const children = (route.components || []).map((c, index) => {
    const Component = c.component;
    const componentProps = { ...c.props, history, params };
    return <Component key={index} {...componentProps} />;
  });

  return (
    <div className={styles["main"]}>
      <Header className={styles["header"]} />
      <main className={`${styles["content"] || ""}`}>{children}</main>
    </div>
  );
};

export default withRouter(App);
