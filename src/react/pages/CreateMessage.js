import React from "react";
import { Menu, NewMessage } from "../components";
import { userIsAuthenticated } from "../HOCs";

class CreateMessage extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <NewMessage />
      </>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
