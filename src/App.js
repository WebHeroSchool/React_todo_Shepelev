import React from 'react';
import logo from './logo.svg';
import './App.css';

const header = 'Заголовок 42';
const num = 11;
const a = 2;
const b = 3;
const c = 5;
const d = 10;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          color: 'green',
          fontSize: '38px'
        }}>
           Пример добавления в разметку объекта style
        </p>
        <h1>
        Пример вывода значения переменной: {header}
        </h1>
        <p>Пример вывода числа: {num}</p>
        <p>Пример вывода результата арифметической операции: { 12+11-7 }</p>
        <p>Пример вывода результата логической операции: { a && b }</p>
        <p>Пример использования тернарного условия: { c > d ? c : d }</p>
        <p>Пример вывода undefined, null, false и true: {undefined} {null} {false} {true} </p>
      </header>

    </div>
  );
}

export default App;
