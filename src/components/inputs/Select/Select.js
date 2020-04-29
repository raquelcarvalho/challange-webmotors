import React from "react";

import styles from "./Select.module.sass";

const Select = (props) => {
  const { value, name, label, onChange, loading, data } = props;
  return (
    <select
      className={styles["select"]}
      value={value}
      name={name}
      onChange={(e) => onChange(e)}
    >
      <option value="">{label}</option>
      {!loading &&
        (data || []).map((i) => {
          return (
            <option key={i.ID} value={i.ID}>
              {i.Name}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
