interface PlayerProps {
  image: string | null;
  login: string;
  name?: string;
  children?: React.ReactNode;
}

const PlayerPreview = (props: PlayerProps) => {
  const onImageError = (event: any) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/02/35/35/39/360_F_235353990_f0UX1nFRDaaxHH48CU0UQ32rYxvOrPbM.jpg";
  };
  return (
    <>
      {props.image ? (
        <img className="avatar " src={props.image} alt="Avatar" onError={onImageError} />
      ) : null}

      {props.login ? (
        <ul className="player-info__list">
          <li className="player-info__item">
            Name: <strong>{props.name ? props.name : props.login}</strong>
          </li>
          {props.children}
        </ul>
      ) : null}
    </>
  );
};

export default PlayerPreview;
