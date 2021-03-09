import React from "react";
// import styles from "./About.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class About extends React.Component {
  state = {
    isLoading: true,
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div className="about__container">
        {isLoading ? <CircularProgress /> : "Обо мне"}
      </div>
    );
  }
}
