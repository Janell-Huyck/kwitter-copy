import React from "react";
import LikeMessage from "./LikeMessage";
import UnlikeMessage from "./UnlikeMessage";
// import withAsyncAction from "../HOCs";

let messageIsLiked = "";

class LikeOrUnlike extends React.Component {
  componentDidMount = () => {
    messageIsLiked = this.checkIfMessageIsLiked();
  };

  checkIfMessageIsLiked = () => {
    const username = JSON.parse(localStorage.login).result.username;
    let usersWhoLike = this.props.likes.map(like => {
      return like.username;
    });
    if (usersWhoLike.includes(username)) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return messageIsLiked === true ? (
      <LikeMessage id={this.props.id} />
    ) : (
      <UnlikeMessage id={this.props.id} />
    );
  }
}

export default LikeOrUnlike;
