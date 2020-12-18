import React from "react";
import styles from "./InputItem.module.css";
import PropTypes from "prop-types";

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
  };
  onButtonClick = () => {
    this.setState({ inputValue: "" });
    if (!this.state.inputValue) {
      alert("Вы не указали задачу!");
    } else {
      this.props.onClickAdd(this.state.inputValue);
    }
  };
  render() {
    return (
      <form>
        <input
          className={styles.text}
          type="text"
          placeholder="Запишите дело"
          value={this.state.inputValue}
          onChange={(event) =>
            this.setState({ inputValue: event.target.value })
          }
        />
        <button
          className={styles.btn}
          onClick={this.onButtonClick}
          type="button"
        >
          Add
        </button>
      </form>
    );
  }
}

InputItem.PropTypes = {
  onClickAdd: PropTypes.func,
};
