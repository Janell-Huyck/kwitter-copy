import React from "react";
import { Menu, ProfileCard, NewMessageBox } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="page">
          <div className="leftBox">
              <Menu isAuthenticated={this.props.isAuthenticated} />
              <h2>Create New Message</h2>
              <NewMessageBox />
            </div>
          <div className="rightBox">
            <ProfileCard />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
