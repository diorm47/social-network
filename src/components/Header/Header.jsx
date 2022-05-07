import React from "react";
import { NavLink } from "react-router-dom";
import avatarLogo from "../../assets/image/avatar.png";
import c from "./Header.module.css";

let Header = (props) => {
  let userAvatar = props.profile ? props.profile.photos.small : avatarLogo;

  return (
    <header className={c.header}>
      <div className={c.logo}>
        <h2>OBLIVION</h2>
      </div>

      <div className={c.loginBlock}>
        {props.isAuth ? (
          <div>
            <div className={c.authUser}>
              <img src={userAvatar} alt="user_img" />
              {props.login}
            </div>{" "}
            <button className={c.logout} onClick={props.logout}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink className={c.login} to={"/login"}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
