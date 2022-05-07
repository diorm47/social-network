import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  isEmpty,
} from "./../../../utilities/validators/index";
import { Input } from "./../../common/FormsControls/FormsControls";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength60 = maxLengthCreator(60);

let MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <>
      <div className={c.line}></div>
      <div className={c.MyPostsContent}>
        <div className={c.posts}>{postsElements}</div>
        <div className={c.input_area}>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
      </div>
    </>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={c.fieldarea}>
        <Field
          name="newPostText"
          component={Input}
          placeholder={"message"}
          validate={[isEmpty, maxLength60]}
        />
        <button className={c.button}>send</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
