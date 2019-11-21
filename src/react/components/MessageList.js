import React from "react";
import MessageCard from "./MessageCard";
import "./MessageList.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from "../components";

class MessageList extends React.Component {
  // state = {
  //   messages: [
  //     {
  //       id: 938,
  //       text: "This is my second message!",
  //       username: "testuser",
  //       createdAt: "2019-11-18T16:07:42.936Z",
  //       likes: []
  //     },
  //     {
  //       id: 937,
  //       text: "Hello World!",
  //       username: "testuser",
  //       createdAt: "2019-11-18T15:52:56.879Z",
  //       likes: []
  //     }
  //   ]
  // };
  componentDidMount = () => {
    this.props.getMessageList();
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
                username={message.username}
                text={message.text}
                createdAt={message.createdAt}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default withAsyncAction("messages", "getMessageList")(MessageList);
