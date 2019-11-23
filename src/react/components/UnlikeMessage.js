import React from "react";
import { withAsyncAction } from "../HOCs";

class UnlikeMessage extends React.Component {
  unlikeMessage = event => {
    event.preventDefault();
    this.props.unlikeMessage(this.props.id);
    //and then, change the display to a "like message" symbol/words
  };

  render() {
    return <button onClick={this.unlikeMessage}>Unlike This Message!</button>;
  }
}

export default withAsyncAction("likes", "unlikeMessage")(UnlikeMessage);
