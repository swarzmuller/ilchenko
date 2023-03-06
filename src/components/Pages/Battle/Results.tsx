import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { battle } from "../../../Api";
import PlayerPreview from "./PlayerPreview";

interface Profile {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  location: string;
  company: string;
  followers: string | number;
  following: string | number;
  public_repos: string | number;
  blog: string;
}

interface ResultsProps {
  score: number;
  profile: Profile;
}

const Results = () => {
  const [profile, setProfile] = useState([]);
  const [selector, setSelector] = useState("");
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  useEffect(() => {
    battle(state.usersNames)
      .then((data) => {
        if (Array.isArray(data)) {
          let arr = data.filter((dataItem) => dataItem !== undefined);
          setProfile(arr);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [state.usersNames]);

  const playerInfoHtml = (profileItem: any) => {
    const infoArr = ["location", "company", "followers", "following", "public_repos", "blog"];
    const listHtml = infoArr.map((infoArrItem, key) => {
      return (
        <li className="player-info__item" key={key}>
          {infoArrItem}:{" "}
          <strong>{profileItem[infoArrItem] ? profileItem[infoArrItem] : "No info"}</strong>
        </li>
      );
    });
    return listHtml;
  };

  const checkWinner = () => {
    if (profile.length >= 1) {
      setSelector("checkWinner");
    }
  };

  return (
    <>
      <h1>Rusults</h1>
      <Link to="/battle" className="button">
        Change Users
      </Link>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={`battle__list rusults ${selector}`}>
            {profile.map((profileItem: ResultsProps, key) => (
              <div className="battle__item rusults column " key={key}>
                <PlayerPreview
                  image={profileItem.profile.avatar_url}
                  login={profileItem.profile.login}
                  name={profileItem.profile.name}
                >
                  {playerInfoHtml(profileItem.profile)}
                </PlayerPreview>
              </div>
            ))}
          </div>

          <div className="sticky">
            <button onClick={checkWinner} className="button">
              Start Game!
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Results;
