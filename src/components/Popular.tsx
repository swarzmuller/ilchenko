import { useSearchParams } from "react-router-dom";
import { useEffect} from "react";

const tabs = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  useEffect(() => {
    if (lang === null) {
      setSearchParams({ lang: "all" });
    }
  }, [setSearchParams, lang])

  const searchHandler = (value: string) => {
    setSearchParams({ lang: value });
  };  

  return (
    <>
      <h1>Popular</h1>
      <div className="tabs">
        {tabs.map((tab, index: number) => (
          <li
            key={index}
            className={lang === tab.toLowerCase() ? "tab__item tab-active" : "tab__item"}
            onClick={() => searchHandler(tab.toLowerCase())}
          >
            {tab}
          </li>
        ))}
      </div>
      <div className="content">
          <h3>Your language: {lang?.toUpperCase()}</h3>
      </div>
    </>
  );
};

export default Popular;
