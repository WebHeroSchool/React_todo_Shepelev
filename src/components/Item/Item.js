import React from 'react';

const Item = ({ todoItem }) => {
  return (
  <>
  {todoItem.map((item) => {
          return <li> { item } </li>
        })}
  </>
  )}

export default Item
