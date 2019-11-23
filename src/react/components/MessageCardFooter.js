import React from "react";
// import withAsyncAction from "../HOCs"
import { Spinner } from "../components";
// import LikeOrUnlike from "./LikeOrUnlike";
import { likeMessage, unlikeMessage } from "../../redux";
import LikeMessage from "./LikeMessage";
import UnlikeMessage from "./UnlikeMessage";

// let messageIsLiked = "";

class MessageCardFooter extends React.Component {
  // componentDidMount = () => {
  //     messageIsLiked = this.checkIfMessageIsLiked();
  // };

  // checkIfMessageIsLiked = () => {
  //     const username = JSON.parse(localStorage.login).result.username;
  //     let usersWhoLike = this.props.likes.map(like => {
  //         return like.username;
  //     });
  //     if (usersWhoLike.includes(username)) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // };

  render() {
    //write some code here to make a variable for whether or not a message has already been liked by the user.
    return (
      <React.Fragment>
        {/* // messageIsLiked === true ? ( // <LikeMessage id={this.props.id} />
        // ) : ( // <UnlikeMessage id={this.props.id} />
        // ) */}
        <LikeMessage id={this.props.id} />
        <UnlikeMessage id={this.props.id} />
        {/* <LikeOrUnlike likes={this.props.likes} id={this.props.id} /> */}
        <div>{this.props.likes.length} Likes</div>
        <div>Delete</div>
      </React.Fragment>
    );
  }
}
export default MessageCardFooter;
