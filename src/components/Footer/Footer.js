import React from "react";
import styles from "./Footer.module.css";

Footer.defaultProps = {
  count: 0,
};

export default function Footer({ count }) {
  return (
    <div className={styles.container}>
      <div>
        <span>Осталось выполнить дел: {count}</span>
      </div>
      <div className={styles.filters}>
        <button>All</button>
        <button>Active</button>
        <button>Complite</button>
      </div>
      <div>
        <button className={styles.clear}>Clear completed tasks</button>
      </div>
    </div>
  );
}
