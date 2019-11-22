import React, { ReactFragment } from "react";

class MessageCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h4>{this.props.username}</h4>
          <p>{this.props.text}</p>
          <p>{new Date(this.props.createdAt).toDateString()}</p>
        </div>
        <div className="messageFooter">
          <div>Like</div>
          <div> X Likes</div>
          <div>Delete</div>
        </div>
      </React.Fragment>
    );
  }
}

export default MessageCard;
