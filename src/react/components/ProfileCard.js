import React, { Component } from "react";
import "./ProfileCard.css";
import MessageList from "./MessageList";

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
const month = fakeUser.createdAt.split("-").splice(1, 1);
const year = fakeUser.createdAt.split("-").splice(0, 1);
const day = fakeUser.createdAt
  .slice(0, fakeUser.createdAt.indexOf("T"))
  .split("-")
  .reverse()
  .shift();
const date = month + "-" + day + "-" + year;

const date2 = fakeUser.createdAt
  .slice(0, fakeUser.createdAt.indexOf("T"))
  .split("-")
  .reverse();
console.log(date2);
class ProfileCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pfp-card">
          <div className="user-info">
            <img src={fakeUser.pictureLocation} alt="user profile" />
            <div className="user-names">
              <h2>{fakeUser.displayName}</h2>
              <p>{fakeUser.username}</p>
              <h4>joined: {date}</h4>
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
        <MessageList className="kweets" />
      </React.Fragment>
    );
  }
}

export default ProfileCard;
