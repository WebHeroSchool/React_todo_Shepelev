import React from "react";
// import styles from "./About.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export default class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    error: null,
  };

  componentDidMount() {
    octokit.repos
      .listForUser({
        username: "EPShepelev",
      })
      .then(({ data }) => {
        this.setState({
          repoList: data,
          isLoading: false,
        });
      })
      .catch((e) => {
        this.setState({ error: e });
      });
  }

  render() {
    const { isLoading, repoList, error } = this.state;
    return (
      <div className="about__container">
        <div>
          {isLoading && !error ? <CircularProgress /> : "Мои репозитории"}
        </div>
        {error ? (
          <div>`Ошибка: {error.message}`</div>
        ) : (
          !isLoading && (
            <ol>
              {repoList.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url}>{repo.name}</a>
                </li>
              ))}
            </ol>
          )
        )}
      </div>
    );
  }
}
