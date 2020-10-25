import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ todoItem, isDone }) => {
  
  return (<li className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
  }>  { todoItem }  </li>)
  }

export default Item
