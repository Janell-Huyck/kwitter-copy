import React from "react";
import { userIsAuthenticated } from "../HOCs";
import { Menu, TheKweed } from "../components";

class KweedPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <TheKweed />
      </React.Fragment>
    );
  }
}
export default userIsAuthenticated(KweedPage);