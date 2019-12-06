import React from "react";
import MessageCardFooter from "./MessageCardFooter";
import { Link } from ".";

class MessageCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to={`/profile/${this.props.author}`}>
            <h4>{this.props.author}</h4>
          </Link>
          <p>{this.props.text}</p>
          <p>{new Date(this.props.createdAt).toDateString()}</p>
        </div>
        <MessageCardFooter
          id={this.props.id}
          likes={this.props.likes}
          requestTag={this.props.requestTag}
          author={this.props.author}
        />
      </React.Fragment>
    );
  }
}

export default MessageCard;
