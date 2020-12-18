import React from "react";
import classnames from "classnames";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

const Item = ({ todoItem, isDone, onClickDone, onClickDelete, id }) => {
  return (
    <div>
      <li
        className={classnames({
          [styles.item]: true,
          [styles.done]: isDone,
        })}
      >
        {" "}
        <div>
          <input type="checkbox" onClick={() => onClickDone(id)} /> {todoItem}
        </div>
        <button onClick={() => onClickDelete(id)}>X</button>
      </li>
    </div>
  );
};

export default Item;

Item.defaultProps = {
  isDone: false,
};

Item.PropTypes = {
  todoItem: PropTypes.array.isRequired,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
};
