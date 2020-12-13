import React from "react";
import styles from "./InputItem.module.css";

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
  };
  onButtonClick = () => {
    this.setState({ inputValue: "" });
    this.props.onClickAdd(this.state.inputValue);
  };
  render() {
    const { onClickAdd } = this.props;
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
