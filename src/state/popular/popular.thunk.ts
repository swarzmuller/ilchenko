import { getReposLoadingAction, getRepoSuccessAction, setReposErrorActiom } from "./popular.slice";
import { fetchData } from "../../Api";


const getRepos = (lang: string) => {
  return (dispatch: any) => {
    dispatch(getReposLoadingAction(true));
    fetchData(lang)
      .then((data: any) => {
        dispatch(getRepoSuccessAction(data.items));
        dispatch(getReposLoadingAction(false));
      })
      .catch((error) => dispatch(setReposErrorActiom(error)));
  };
};

export default getRepos;
