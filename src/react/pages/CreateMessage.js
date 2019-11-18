import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";

class CreateMessage extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <p>This is the Create Message Page</p>
      </>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
