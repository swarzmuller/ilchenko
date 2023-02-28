import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

const uid = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
let initialPlayer1 = uid();
let initialPlayer2 = uid();

const Battle = () => {
  const [user, setUser] = useState({
    [initialPlayer1]: {
      name: "",
      img: null,
    },
    [initialPlayer2]: {
      name: "",
      img: null,
    },
  });
  const [userId, setUserId] = useState([initialPlayer1, initialPlayer2]);

  const userInfo = (userId: string, userName: string, userAvatar: string | null) => {    
    setUser((prevState: {}) => ({
      ...prevState,
      [userId]: {
        name: userName,
        img: userAvatar,
      },
    }));
  };

  const handleAddNewUser = (id: string) => {
    if (!userId.includes(id)) {
      userInfo(id, "", null);
      setUserId([...userId, id]);
    }
  };

  const handleRemoveUser = (id: string) => {
    const arr = userId.filter((removeId) => removeId !== id);
    delete user[id as keyof typeof user];
    setUserId(arr);
    setUser(user);
  };

  const handleChange = (id: string, value: string) => {
    if (value.length >= 3) {
      userInfo(id, value, `https://github.com/${value}.png?size=200`);
    }
  };

  const checkOnFill = () => {
    const arr = Object.values(user).filter((userN) => userN.name !== "");
    if (arr.length >= 2) {
      return (
        <Link to="/results" className="button">
          Results
        </Link>
      );
    }
  };

  return (
    <div>
      <button className="battle__add-new" onClick={() => handleAddNewUser(uid())}>
        +Add New Player
      </button>
      <div className="battle__list">
        {userId.map((ids, index) => (
          <div className="battle__item column" key={index}>
            <PlayerPreview id={ids} user={user} />
            <PlayerInput id={ids} index={index + 1} handleChange={handleChange}>
              <button className="battle__remove" onClick={() => handleRemoveUser(ids)}>
                Remove
              </button>
            </PlayerInput>
          </div>
        ))}
      </div>
      {checkOnFill()}
    </div>
  );
};

export default Battle;
