import React from "react";
import MessageCard from "./MessageCard";
import "./MessageList.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";

class SpecificUserMessages extends React.Component {
  componentDidMount = () => {
    this.props.getSpecificUserMessages(this.props.profileName);
  };

  render() {
    return !this.props.result ? (
      <Spinner />
    ) : (
      <div className="messageList">
        {this.props.result.messages.map(message => {
          return (
            <div className="messageCard" key={message.id}>
              <MessageCard
                id={message.id}
                username={message.username}
                text={message.text}
                createdAt={message.createdAt}
                likes={message.likes}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAsyncAction(
  "messages",
  "getSpecificUserMessages"
)(SpecificUserMessages);
