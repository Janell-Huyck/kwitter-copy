import React, { Component } from "react";
import "./ProfileCard.css";
import { withAsyncAction } from "../HOCs";
import { connect } from "react-redux";
import {
  CreatedAt,
  Spinner,
  DeleteUserButton,
  UploadUserPicture
} from "../components";

class ProfileCard extends Component {
  componentDidMount() {
    this.props.getUser(this.props.profileName);
  }

  componentDidUpdate(prevProps) {
    if (this.props.profileName !== prevProps.profileName) {
      this.props.getUser(this.props.profileName);
    }
  }

  render() {
    return !this.props.result ? (
      <Spinner />
    ) : (
      <div className="pfp-card">
        <div className="user-picture">
          {this.props.pictureLocation ? (
            <img
              className="user-picture"
              src={`https://kwitter-api.herokuapp.com${this.props.pictureLocation}`}
              alt="user profile"
            />
          ) : (
            <img
              className="user-picture"
              src={
                "https://cdn.pixabay.com/photo/2018/04/22/22/57/hacker-3342696_960_720.jpg"
              }
              alt="user profile"
            />
          )}
        </div>
        <div className="user-names">
          <p>Username:</p>
          <h2>{this.props.username}</h2>
          <p>Display Name:</p>
          <h2>{this.props.displayName}</h2>
          <h4>joined:</h4>
          <CreatedAt />
        </div>
        <div className="bio">
          {this.props.about ? (
            "Bio: " + this.props.about
          ) : (
            <p>"No bio provided by this user"</p>
          )}
        </div>

        <DeleteUserButton username={this.props.username} />
        <UploadUserPicture username={this.props.username} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.users.getUser.result) {
    return {
      loggedIn: state.auth.login.result.username,
      username: state.users.getUser.result.user.username,
      pictureLocation: state.users.getUser.result.user.pictureLocation,
      displayName: state.users.getUser.result.user.displayName,
      about: state.users.getUser.result.user.about,
      googleId: state.users.getUser.result.user.googleId,
      createdAt: state.users.getUser.result.user.createdAt,
      updatedAt: state.users.getUser.result.user.updatedAt
    };
  } else return {};
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "getUser")(ProfileCard)
);
