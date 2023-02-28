interface PlayerProps {
  id: string;
  user: {
    [key: string]:{
      name: string;
      img: string | null;
    };
  };
}

const PlayerPreview = (props: PlayerProps) => {
  const onImageError = (event: any) => {
    event.target.src =
      "https://t4.ftcdn.net/jpg/02/35/35/39/360_F_235353990_f0UX1nFRDaaxHH48CU0UQ32rYxvOrPbM.jpg";
  };

  console.log(props.user);

  return (
    <>
      {props.user[props.id].img ? (
        <img
          className="avatar "
          src={props.user[props.id].img as string}
          alt="Avatar"
          onError={onImageError}
        />
      ) : null}
      <h2>{props.user[props.id].name}</h2>
    </>
  );
};

export default PlayerPreview;
