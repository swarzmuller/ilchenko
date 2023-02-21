import { memo } from "react";
import { PopularProps } from "../../../interface";

const SelectedRepos = memo((props: PopularProps) => {
  return (
    <ul className="content">
      {props.repos.map((repo, index) => {
        return (
          <li className="content__item" key={repo.id}>
            <p className="content__number">#{index + 1}</p>
            <img className="content__img" src={repo.owner.avatar_url} alt="Avatar" />
            <a className="content__link" target="_blank" rel="noreferrer" href={repo.html_url}>
              {repo.name}
            </a>
            <p className="content__login">@{repo.owner.login}</p>
            <p className="content__count">{repo.stargazers_count}</p>
          </li>
        );
      })}
    </ul>
  );
});

export default SelectedRepos;
