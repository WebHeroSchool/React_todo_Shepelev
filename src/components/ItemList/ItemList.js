import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => {
  return (
    <>
      <ul>
        <Item { todoItem }/>
      </ul>
    </>
  )
}


export default ItemList
