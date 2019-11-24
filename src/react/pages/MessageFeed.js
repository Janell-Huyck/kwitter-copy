import React from "react";
import { Menu, NewMessageBox, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <div className="page">
          <div className="leftBox">
            <Menu isAuthenticated={this.props.isAuthenticated} />
            <h3>Create New Kweet Below...</h3>
            <NewMessageBox />
          </div>
          <div className="rightBox">
            <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
