import React, { useState } from "react";
import Preloader from "./../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "../ProfileData/ProfileDataForm";
import editIcon from "../../../assets/icons/edit.svg";
import download from "../../../assets/icons/download.svg";

let ProfileInfo = ({
  isOwner,
  profile,
  status,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={c.main_wrapper}>
      <div className={c.descBlock}>
        <img
          className={c.users_img}
          alt="user's profile img"
          src={profile.photos.large}
        />
        {isOwner && (
          <div className={c.input_file}>
            <input type={"file"} id="file" onChange={onMainPhotoSelected} />
            <label htmlFor="file">
              <img className={c.download} src={download} alt="download_img" />
              <div className={c.line}></div>
              <p>upload</p>
            </label>
          </div>
        )}
      </div>

      {editMode ? (
        <ProfileDataForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
  status,
  updateStatus,
}) => {
  return (
    <div className={c.profile_info}>
      <div className={c.edit_mode}>
        <div>
          <h2>{profile.fullName}</h2>
        </div>
        {isOwner && (
          <button onClick={goToEditMode}>
            <img src={editIcon} alt="edit" />
          </button>
        )}
      </div>
      <div className={c.items_wrapper}>
        <div className={c.left_items}>
          <div className={c.profile_status}>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </div>

          <div>
            <b>Looking for a job:</b> <br />{" "}
            {profile.lookingForAJob ? "Yes !" : "No !"}
          </div>
          {profile.lookingForAJob && (
            <div>
              <b>Skills:</b> <br />
              {profile.lookingForAJobDescription}
            </div>
          )}
          <div>
            <b>About me:</b> <br /> {profile.aboutMe}
          </div>
        </div>

        <div className={c.contacts}>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={c.contact_items}>
      <b className={c.contactTitle}>{contactTitle}:</b>
      {"    "}
      {contactValue ? (
        <a href={`https://${contactValue}`} rel="noopener" target="_blank">
          {contactValue}
        </a>
      ) : (
        <span className={c.nodata}>no data</span>
      )}
    </div>
  );
};

export default ProfileInfo;
