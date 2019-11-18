import React from "react";
import { Menu, NewMessageBox } from "../components";
import { userIsAuthenticated } from "../HOCs";

class CreateMessage extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="newMessagePage">
          <h1>Create a New Message</h1>
          <p>
            Enter your new message inside the text box below and click "Post
            Message". To cancel, click "Cancel".
          </p>
          <NewMessageBox />
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(CreateMessage);
