import React from "react";
import classnames from "classnames";
import styles from "./Item.module.css";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { todoItem, isDone, onClickDone, onClickDelete, id } = this.props;
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
  }
}

export default Item;

Item.defaultProps = {
  isDone: false,
};

Item.propTypes = {
  todoItem: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func,
  id: PropTypes.number.isRequired,
};
