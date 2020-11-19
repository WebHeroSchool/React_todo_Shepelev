import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ todoItem, isDone, onClickDone }) => {
  
  return (<div><li className = {
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
  }> <div>
      <input type="checkbox" onClick = {()=> onClickDone(isDone)} /> { todoItem } 
      </div> 
      <button>X</button> 
    </li>
  </div>)
  }

export default Item
