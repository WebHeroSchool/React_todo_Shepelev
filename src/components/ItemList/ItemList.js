import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => {
  return (
      <ul> 
        {todoItem.map(item => {
          return <Item key = {item.id} todoItem = {item.value} isDone = {item.isDone} />
        })}
      </ul>
  )
}


export default ItemList
