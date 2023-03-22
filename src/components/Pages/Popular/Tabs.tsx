import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularReducer } from "../../../interface";
import { selectedLanguageAction } from "../../../state/popular/popular.action";

const laguages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Tabs = memo(() => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: PopularReducer) => state.popularReducer.selectedLanguage);

  return (
    <ul className="tabs">
      {laguages.map((laguage, index: number) => (
        <li
          key={index}
          className={laguage === selectedLanguage ? "tab__item tab-active" : "tab__item"}
          onClick={() => dispatch(selectedLanguageAction(laguage))}
        >
          {laguage}
        </li>
      ))}
    </ul>
  );
});

export default Tabs;
