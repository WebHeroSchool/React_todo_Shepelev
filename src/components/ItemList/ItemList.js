import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<div>
  <ul>
    <li><Item todoItem = {todoItem}/></li>
    <li><Item todoItem = {'Выложить его на гитхаб'}/></li>
    <li><Item todoItem = {'Отпраздновать!'}/></li>
  </ul>
</div>)

export default ItemList
