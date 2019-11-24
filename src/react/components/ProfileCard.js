import React, { Component } from "react";
import "./ProfileCard.css";
import { withAsyncAction } from "../HOCs";
import { connect } from "react-redux";

let createdAt = new Date("2019-11-18T15:10:16.100Z").toDateString();
let newCreatedAt;

const fakeUser = {
  pictureLocation:
    "https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",
  username: "jordans-Test",
  displayName: "Jordan's Test",
  about: "",
  googleId: null,
  createdAt: "2019-11-18T15:10:16.100Z",
  updatedAt: ""
};

class ProfileCard extends Component {
  componentDidMount() {
    this.props
      .getUser(this.props.username)
      .then(console.log(this.props.createdAt));
  }
  getUser = () => {};
  //**************************************************
  // stopping point - trying to get the createdAt date once it finishes loading.
  //then, use .toDateString() to make it readable, and insert in the return below.
  //******************************************************
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="pfp-card">
          <div className="user-info">
            <img src={fakeUser.pictureLocation} alt="user profile" />
            <div className="user-names">
              <p>Username:</p>
              <h2>{this.props.username}</h2>
              <p>Display Name:</p>
              <h2>{this.props.displayName}</h2>
              <h4>joined:</h4>
              <p>{createdAt}</p>
            </div>
          </div>
          <div className="counters">
            <span>0 kweets</span>
            <span>0 following</span>
            <span>0 followers</span>
            <span>0 likes</span>
          </div>
          <div className="bio">
            {fakeUser.about ? (
              "Bio: " + fakeUser.about
            ) : (
              <p>"No bio provided by this user"</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  if (state.users.getUser.result) {
    return {
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
