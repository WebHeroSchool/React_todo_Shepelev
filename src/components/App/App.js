import React, { useState } from "react";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

const App = () => {
  const initialState = {
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

  const [todoItem, setTodoItem] = useState(initialState.importantTask);
  const [count, setCount] = useState(initialState.taskCount);

  const onClickDone = (id) => {
    const newItemList = todoItem.map((item) => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setTodoItem({ importantTask: newItemList });
  };

  const onClickDelete = (id) =>
    setTodoItem((state) => ({
      importantTask: state.importantTask.filter(
        (importantTask) => importantTask.id !== id
      ),
      count: setCount((count) => count - 1),
    }));

  const onClickAdd = (value) =>
    setTodoItem((state) => ({
      importantTask: [
        ...state.importantTask,
        {
          value: value,
          id: setCount((count) => count + 1),
          isDone: false,
        },
      ],
      count: setCount((count) => count + 1),
    }));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> todo's list </h1>
      <InputItem onClickAdd={onClickAdd} />
      <hr className={styles.line} />
      <ItemList
        todoItem={todoItem}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <hr className={styles.line} />
      <Footer count={count} />
    </div>
  );
};
export default App;
