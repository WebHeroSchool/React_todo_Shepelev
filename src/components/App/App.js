import React from "react";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state = {
      taskCount: 4,
      importantTask: [
        {
          value: "Создать приложение",
          id: 1,
          isDone: false,
        },
        {
          value: "Исправить баги",
          id: 2,
          isDone: false,
        },
        {
          value: "Отпраздновать!",
          id: 3,
          isDone: false,
        },
        {
          value: "Опубликовать",
          id: 4,
          isDone: false,
        },
      ],
    };
  }

  onClickDone = (id) => {
    const newItemList = this.state.importantTask.map((item) => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ importantTask: newItemList });
  };

  onClickDelete = (id) =>
    this.setState((state) => ({
      importantTask: state.importantTask.filter(
        (importantTask) => importantTask.id !== id
      ),
    }));

  onClickAdd = () =>
    this.setState((state) => ({
      importantTask: [
        ...state.importantTask,
        {
          value: "Click!",
          id: state.taskCount + 1,
          isDone: false,
        },
      ],
      taskCount: state.taskCount + 1,
    }));

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}> todo's list </h1>
        <InputItem onClickAdd={this.onClickAdd} />
        <hr className={styles.line} />
        <ItemList
          todoItem={this.state.importantTask}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete}
        />
        <hr className={styles.line} />
        <Footer count={this.state.taskCount} />
      </div>
    );
  }
}

export default App;
