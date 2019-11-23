import React from "react";
// import withAsyncAction from "../HOCs"
import { Spinner } from "../components";
// import LikeOrUnlike from "./LikeOrUnlike";
import { likeMessage, unlikeMessage } from "../../redux";
import LikeMessage from "./LikeMessage";
import UnlikeMessage from "./UnlikeMessage";

let messageIsLiked = "";

class MessageCardFooter extends React.Component {
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
    //write some code here to make a variable for whether or not a message has already been liked by the user.
    // this.checkIfMessageIsLiked();
    return (
      <div className="messageFooter">
        {this.checkIfMessageIsLiked() === false ? (
          <LikeMessage messageId={this.props.id} />
        ) : (
          <UnlikeMessage
            likes={this.props.likes}
            // username={JSON.parse(localStorage.login).result.username}
          />
        )}
        <div>{this.props.likes.length} Likes</div>
        <div>Delete</div>
      </div>
    );
  }
}
export default MessageCardFooter;
