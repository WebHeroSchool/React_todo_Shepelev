import React from "react";
import Item from "../Item/Item";

const ItemList = ({ todoItem, onClickDone }) => {
  return (
    <ul>
      {todoItem.map((item) => {
        return (
          <Item
            key={item.id}
            todoItem={item.value}
            id={item.id}
            isDone={item.isDone}
            onClickDone={onClickDone}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
