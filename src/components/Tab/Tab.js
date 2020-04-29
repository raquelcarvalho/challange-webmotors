import React, { useState } from "react";
import styles from "./Tab.module.sass";
import TabItem from "./TabItem";

const Tab = (props) => {
  const { labels, children, params, history } = props;
  const [active, setActive] = useState(0);

  const renderChildren = (key) => {
    const Component = (children[key] || {}).component;
    if (!Component) {
      return <div>No data</div>;
    }
    const componentProps = { ...children[key].props, history, params };
    return <Component key={key} {...componentProps} />;
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["tabs"]}>
        {labels.map(({ key, title, subtitle, icon }) => (
          <TabItem
            key={key}
            icon={icon}
            title={title}
            subtitle={subtitle}
            onItemClicked={() => setActive(key)}
            isActive={active === key}
          />
        ))}
      </div>
      <div className={styles["content"]}>{renderChildren(active)}</div>
    </div>
  );
};

export default Tab;
