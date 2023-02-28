import { memo, useState } from "react";

interface PlayerProps {
  id: string;
  index: number;
  handleChange: (id: string, name: string) => void;
  children: React.ReactNode;
}

const PlayerInput = memo((props: PlayerProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleChange(props.id, name);
    setName("");
  };

  return (
    <>
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Player {props.index}</label>
        <input
          type="text"
          id="username"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button className="button">Submit</button>
      </form>
   
    </>
  );
});

export default PlayerInput;
