import React from "react";
import { withAsyncAction } from "../HOCs";

class LikeMessage extends React.Component {
  likeMessage = event => {
    event.preventDefault();
    this.props.likeMessage({ messageId: this.props.id });
    //and then, change the display to an "unlike message" symbol/words;
  };

  render() {
    return <button onClick={this.likeMessage}>Like This Message!</button>;
  }
}

export default withAsyncAction("likes", "likeMessage")(LikeMessage);
