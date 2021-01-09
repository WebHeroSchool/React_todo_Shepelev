import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Todo from "../Todo/Todo";

const App = () => (
  <Router>
    <div className={styles.menu__container}>
      <div className={styles.menu__link}>
        <Link className={styles.menu__item} to="/">
          Обо мне
        </Link>
        <Link className={styles.menu__item} to="/todo">
          Список дел
        </Link>
        <Link className={styles.menu__item} to="/contacts">
          Контакты
        </Link>

        <div className={styles.menu__content}></div>
        <Route path="/" exact component={About} />
        <Route path="/todo" component={Todo} />
        <Route path="/contacts" component={Contacts} />
      </div>
    </div>
  </Router>
);

export default App;
