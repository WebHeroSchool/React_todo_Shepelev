import React from "react";
// import styles from "./About.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export default class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
  };

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: "EPShepelev",
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({
          repoList: data,
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading, repoList } = this.state;
    return (
      <div className="about__container">
        <div>{isLoading ? <CircularProgress /> : "Мои репозитории"}</div>
        {!isLoading && (
          <ol>
            {repoList.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}
