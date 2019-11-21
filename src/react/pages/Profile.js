import React from "react";
import { Menu, ProfileCard, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";
// import { MessageList } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <ProfileCard />
        <MessageList />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);