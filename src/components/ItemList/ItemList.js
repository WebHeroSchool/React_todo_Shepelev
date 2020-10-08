import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => {
  return (
    <>
      <ul> 
        {todoItem.map(item => {
          return <Item todoItem = {item}/>
        })}
      </ul>
    </>
  )
}


export default ItemList
