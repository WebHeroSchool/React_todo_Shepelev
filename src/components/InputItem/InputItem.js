import React from "react";
import styles from "./InputItem.module.css";

export default function InputItem({ onClickAdd }) {
  return (
    <form>
      <input className={styles.text} type="text" placeholder="Запишите дело" />
      <button className={styles.btn} onClick={onClickAdd} type="button">
        Add
      </button>
    </form>
  );
}
