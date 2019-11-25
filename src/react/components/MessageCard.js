import React from "react";
import MessageCardFooter from "./MessageCardFooter";

class MessageCard extends React.Component {
  componentDidMount = () => {
    // return messageIsLiked;
  };

  render() {
    //write some code here to make a variable for whether or not a message has already been liked by the user.
    return (
      <React.Fragment>
        <div>
          <h4>{this.props.username}</h4>
          <p>{this.props.text}</p>
          <p>{new Date(this.props.createdAt).toDateString()}</p>
        </div>
        <MessageCardFooter id={this.props.id} likes={this.props.likes} />
      </React.Fragment>
    );
  }
}

export default MessageCard;
