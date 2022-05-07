import React from "react";
import c from "./Post.module.css";
import avatarImg from "../../../../assets/image/avatar.png";

let Post = (props) => {
  return (
    <div className={c.item}>
      <img className={c.ava_img} src={avatarImg} alt='img' />

      <div className={c.chat_texts}>
        {props.message} <br />
        <span> like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
