import React from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.username}</h4>
        <p>{this.props.text}</p>
        <p>{new Date(this.props.createdAt).toDateString()}</p>
      </div>
    );
  }
}

export default MessageCard;
