import { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getRepos from "../../../state/popular/popular.thunk";
import { PopularReducer } from "../../../interface";

const SelectedRepos = memo(() => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: PopularReducer) => state.popular.selectedLanguage
  );
  const loading = useSelector((state: PopularReducer) => state.popular.loading);
  const repos = useSelector((state: PopularReducer) => state.popular.repos);
  const error = useSelector((state: PopularReducer) => state.popular.error);

  useEffect(() => {
    dispatch(getRepos(selectedLanguage) as any);
  }, [selectedLanguage, dispatch]);

  if (loading) {
    return <div className="content__loading"></div>;
  }

  if (error) {
    return (
      <p className="content__error">
        Ooops! Something Went Wrong! Status: <span> {error}</span>
      </p>
    );
  }

  return (
    <ul className="content">
      {repos.map((repo: any, index: number) => {
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
