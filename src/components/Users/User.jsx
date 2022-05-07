import React from "react";
import { NavLink } from "react-router-dom";
import userAvatar from "../../assets/image/avatar.png";
import "./users.css";

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className="users_profiles_wrapper">
      <div className="left_elements">
        <div className="users_img">
          <NavLink to={"/profile/" + user.id}>
            <img
              alt="userImg"
              src={user.photos.small != null ? user.photos.small : userAvatar}
              className="userPhoto"
            />
          </NavLink>
        </div>
        <div className="follow_unfollow">
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="users_info">
        <div className="users_name">
          <span>name:</span> {user.name}
        </div>
        {user.status ? (
          <div className="users_status">
            <span>status:</span> {user.status}
          </div>
        ) : (
          " "
        )}
        <div className="users_id">
          <span>Id:</span> {user.id}
        </div>
      </div>
    </div>
  );
};

export default User;
