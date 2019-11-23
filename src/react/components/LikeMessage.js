import React from "react";
import { withAsyncAction } from "../HOCs";

class LikeMessage extends React.Component {
  likeMessage = event => {
    event.preventDefault();
    this.props.likeMessage({ messageId: this.props.messageId });
  };

  render() {
    return <button onClick={this.likeMessage}>Like This Message!</button>;
  }
}

export default withAsyncAction("likes", "likeMessage")(LikeMessage);
