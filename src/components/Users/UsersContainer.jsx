import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow,
} from "./../redux/users-reducer";
//import { getCurrentPage, getFollowingInProgress, getIsfetching, getPageSize, getTotalItemsCount, getUserses } from './../redux/users-selectors';
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount={this.props.totalItemsCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalItemsCount: state.usersPage.totalItemsCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// let mapStateToProps = (state) => {
//   return {
//     users: getUserses(state) ,
//     pageSize: getPageSize(state),
//     totalItemsCount: getTotalItemsCount(state),
//     currentPage: getCurrentPage(state) ,
//     isFetching: getIsfetching(state),
//     followingInProgress: getFollowingInProgress(state),
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
})(UsersContainer);
