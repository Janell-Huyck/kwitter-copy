import React from "react";
import { Menu, MessageList, NewMessageBox } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="page">
          <div className="leftBox">
            <h2>This is the post side</h2>
            <NewMessageBox />
          </div>
          <div className="rightBox">
            <h2>This is the messages page</h2>
            <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
