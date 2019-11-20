import React from "react";
import { Menu, ProfileCard } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfileCard />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);