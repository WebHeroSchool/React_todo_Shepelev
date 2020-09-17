import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => {
  return (
    <>
      <ul>
        {todoItem.map((item) => {
          return <li> <Item todoItem={item}/> </li>
        })}
      </ul>
    </>
  )
}


export default ItemList
