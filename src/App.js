import React from 'react';

const ItemList = () => (<ul>
  <li>task 1</li>
  <li>task 2</li>
  <li>task 3</li>
</ul>)
const App = () => (<div>
  <h1>To Do Component</h1>
  <ItemList/>
  </div>);

export default App