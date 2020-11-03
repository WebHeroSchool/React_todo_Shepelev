import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import CheckboxList from '../Recept/Recept';

const taskCount = 3;
const importantTask = [
  {
    value: 'Создать приложение',
    id: 1,
    isDone: true
  },
  {
    value: 'Исправить баги',
    id: 2,
    isDone: false
  },
  {
    value: 'Отпраздновать!',
    id: 3,
    isDone: false
  }
]

const App = () => (<div className = { styles.container }>
  <h1 className = { styles.title } > todo's App</h1>
  <InputItem />
  <ItemList todoItem = {importantTask}/>
  <Footer count = {taskCount} />
  <CheckboxList/>
</div>)

export default App
