import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import {
  getUserProfile,
  updateStatus,
  getStatus,
  savePhoto,
  saveProfile
} from "./../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId;
    if (this.props.match != null) {
      userId = this.props.match.params.userId;
    } else {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match !== prevProps.match) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId");
  return <ProfileContainer {...props} match={match} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile
  }),
  withAuthRedirect
)(ProfileURLMatch);
