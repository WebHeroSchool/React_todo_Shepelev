import React from "react";
import Item from "../Item/Item";
import PropTypes from "prop-types";

const ItemList = ({ todoItem, onClickDone, onClickDelete }) => {
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
            onClickDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

ItemList.propTypes = {
  todoItem: PropTypes.array.isRequired,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
};
