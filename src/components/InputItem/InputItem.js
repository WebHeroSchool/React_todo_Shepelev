import React from 'react';
import styles from './InputItem.module.css';


export default function InputItem() {

  return (
    <form>
      <input className = { styles.text } type = "text" placeholder= "Запишите дело" />
      <button className = { styles.btn } >Add</button>
    </form>
  );
}



