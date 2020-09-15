import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const taskCount = 3;
const importantTask = 'Написать приложение';

const App = () => (<div>
  <h1> todos </h1>
  <InputItem />
  <ItemList todoItem = {importantTask}/>
  <Footer count = {taskCount} />
</div>)

export default App
