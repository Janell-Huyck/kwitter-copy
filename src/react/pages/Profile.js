import React from "react";
import { Menu, ProfileCard, NewMessageBox } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="page">
          <div className="leftBoxexs">
            <div className="leftTopBox">
              <Menu isAuthenticated={this.props.isAuthenticated} />
            </div>
            <div className="leftBottomBox">
              <NewMessageBox />
            </div>
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
