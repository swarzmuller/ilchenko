import { memo } from "react";
import { TabsProps } from "../../../interface";

const laguages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Tabs = memo((props: TabsProps) => {
  return (
    <ul className="tabs">
      {laguages.map((laguage, index: number) => (
        <li
          key={index}
          className={props.lang === laguage.toLowerCase() ? "tab__item tab-active" : "tab__item"}
          onClick={() => props.tabsSwitcher(laguage.toLowerCase())}
        >
          {laguage}
        </li>
      ))}
    </ul>
  );
});

export default Tabs;
