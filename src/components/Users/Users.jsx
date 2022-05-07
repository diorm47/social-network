import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import "./users.css";

let Users = (props) => {
  return (
    <div className="users_wrapper">
      <div className="pagination_wrapper">
        <Paginator
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          totalItemsCount={props.totalItemsCount}
          pageSize={props.pageSize}
        />
      </div>
      <div className="users">
        {props.users.map((u) => (
          <User
            user={u}
            key={u.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
