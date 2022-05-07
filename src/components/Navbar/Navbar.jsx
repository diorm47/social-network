import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";

let Navbar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink  activeclassname={c.active} to={"/profile"}>
          Profile
        </NavLink>
      </div>

      <div className={c.item}>
        <NavLink activeclassname={c["active"]} to={"/users"}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
