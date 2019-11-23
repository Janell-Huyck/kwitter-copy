import React from "react";
import { withAsyncAction } from "../HOCs";

const username = JSON.parse(localStorage.login).result.username;
class UnlikeMessage extends React.Component {
  unlikeMessage = event => {
    event.preventDefault();
    this.props.likes.forEach(like => {
      if (like.username === username) {
        this.props.unlikeMessage(like.id);
      }
    });
  };

  render() {
    return <button onClick={this.unlikeMessage}>Unlike This Message!</button>;
  }
}

export default withAsyncAction("likes", "unlikeMessage")(UnlikeMessage);
