import { NavLink } from "react-router-dom";

const links = ["Home", "Popular", "Battle"];

const Nav = () => {
  return (
    <ul className="nav">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link === "Home" ? "/" : link.toLowerCase()}>{link}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
