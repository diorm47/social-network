import React from "react";
import "./profileData.css";

import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="save_button">
        <button>save</button>
      </div>
      {error && <div className="errorMessage">{error}</div>}
      <div className="info_wrapper">
        <div className="infos">
          <div>
            <b>Full name:</b>
            {createField("name", "fullName", [], Input)}
          </div>
          <div>
            <b>Looking for a job:</b>
            {createField("", "lookingForAJob", [], Input, {
              type: "checkbox",
            })}
          </div>

          <div>
            <b>My skills:</b>
            {createField("skills", "lookingForAJobDescription", [], Textarea)}
          </div>

          <div>
            <b>About me:</b>

            {createField("about", "aboutMe", [], Textarea)}
          </div>
        </div>

        <div className="contacts">
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div className="contact" key={key}>
                <b>
                  {key}: {createField(key, "contacts." + key, [], Input)}
                </b>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
