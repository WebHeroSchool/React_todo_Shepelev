import React, { useState, useEffect } from "react";
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

  const [importantTask, setImportantTask] = useState(
    initialState.importantTask
  );
  const [taskCount, setTaskCount] = useState(initialState.taskCount);

  useEffect(() => {
    console.log("update");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  const onClickDone = (id) => {
    const newItemList = importantTask.map((item) => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setImportantTask(newItemList);
  };

  const onClickDelete = (id) => {
    const NewItemList = importantTask.filter((item) => item.id !== id);
    setImportantTask(NewItemList);
    setTaskCount((taskCount) => taskCount - 1);
  };

  const onClickAdd = (value) => {
    const NewItemList = [
      ...importantTask,
      {
        value: value,
        id: taskCount + 1,
        isDone: false,
      },
    ];
    setImportantTask(NewItemList);
    setTaskCount((taskCount) => taskCount + 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> todo's list </h1>
      <InputItem onClickAdd={onClickAdd} />
      <hr className={styles.line} />
      <ItemList
        todoItem={importantTask}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <hr className={styles.line} />
      <Footer count={taskCount} />
    </div>
  );
};
export default App;
