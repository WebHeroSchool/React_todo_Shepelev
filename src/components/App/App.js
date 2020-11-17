import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    taskCount: 3,
    importantTask: [
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
  }
}

  render() {

    return(
      <div className = { styles.container }>
        <h1 className = { styles.title } > todo's list </h1>
        <InputItem />
        <hr className= { styles.line }/>
        <ItemList todoItem = {this.state.importantTask}/>
        <hr className= { styles.line }/>
        <Footer count = {this.state.taskCount} />
      </div>);
  };

}


export default App
