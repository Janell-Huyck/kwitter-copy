import React from "react";
import { Menu, MessageList, NewMessageBox } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
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
            <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
