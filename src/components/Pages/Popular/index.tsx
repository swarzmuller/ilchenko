import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { selectedLanguageAction } from "../../../state/popular/popular.slice";

import SelectedRepos from "./SelectedRepos";
import Tabs from "./Tabs";

const Popular = () => {
  const dispatch = useDispatch();
  const handleSearch = debounce((value: string) => {
    if(value === "") {      
      dispatch(selectedLanguageAction("All"));
    } else {
      dispatch(selectedLanguageAction(value));
    }
    
  }, 1000);

  return (
    <>
      <div className="header__bottom">
        <h1>Popular</h1>
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="header__bottom-input"
          type="text"
          placeholder="Search.."
        />
      </div>
      <div className="popular__wrapper">
        <Tabs />
        <SelectedRepos />
      </div>
    </>
  );
};

export default Popular;
