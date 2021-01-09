import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import styles from "./App.module.css";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Todo from "../Todo/Todo";

const App = () => (
  <Router>
    <div>
      <Link to="/">Обо мне</Link>
      <Link to="/todo">Список дел</Link>
      <Link to="/contacts">Контакты</Link>

      <Route path="/" exact component={About} />
      <Route path="/todo" component={Todo} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </Router>
);

export default App;
