import { useSearchParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import SelectedRepos from "./SelectedRepos";
import Tabs from "./Tabs";

const Popular = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  const fetchData = useCallback((query: string) => {
    return new Promise((resolve, reject) => {
      fetch(
        window.encodeURI(
          `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`
        )
      ).then((response) => {
        if (response.ok) {
          resolve(response.json());
        }
        reject(response.status);
      });
    });
  }, []);

  useEffect(() => {
    if (!lang) {
      setSearchParams({ lang: "all" });
    }
  }, [setSearchParams, lang]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setLoading(true);
      fetchData(search === "" ? `stars:>1+language:${lang}` : search)
        .then((data: any) => {
          setError(false);
          setLoading(false);
          setRepos(data.items);
        })
        .catch((dataError) => {
          setLoading(false);
          setError(dataError);
        });
    }, 1000);
    return () => clearTimeout(debounce);

  }, [fetchData, search, lang]);

  const tabsSwitcher = (value: string) => {
    setSearch("");
    setSearchParams({ lang: value });
  };

  const searcHandler = (value: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (value.target.value = value.target.value.replace(/[^a-zA-Z ]+/g, ""));
    setSearch(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement> ) => {
    if(event.key === 'Escape'){
      (event.target as HTMLInputElement).value = ""
    }
  }

  const setElements = () => {
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

    return <SelectedRepos repos={repos} />;
  };

  return (
    <>
      <div className="header__bottom">
        <h1>Popular</h1>
        <input
          className="header__bottom-input"
          type="text"
          placeholder="Search.."
          onChange={searcHandler}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="popular__wrapper">
        <Tabs lang={lang} tabsSwitcher={tabsSwitcher} />
        <div className="popular__content">{setElements()}</div>
      </div>
    </>
  );
};

export default Popular;
