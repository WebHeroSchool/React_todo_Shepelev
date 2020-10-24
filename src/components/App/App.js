import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const taskCount = 3;
const importantTask = [
  {
    value: 'Создать приложение',
    id: 1
  },
  {
    value: 'Исправить баги',
    id: 2
  },
  {
    value: 'Отпраздновать!',
    id: 3
  }
]

const App = () => (<div className = { styles.container }>
  <h1 className = { styles.title } > todos </h1>
  <InputItem />
  <ItemList todoItem = {importantTask}/>
  <Footer count = {taskCount} />
</div>)

export default App
