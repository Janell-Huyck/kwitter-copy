import React from "react";
import MessageCard from "./MessageCard";
import "./MessageList.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";

class MessageList extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  };

  render() {
    return !this.props.result ? (
      <Spinner />
    ) : (
      // ) : !this.props.messageFilter ? (
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
      // ) : (
      //   <div>
      //     {this.props.result.messages
      //       .filter(message => message.username === this.props.messageFilter)

      //       .map(message => {
      //         return (
      //           <div className="messageCard" key={message.id}>
      //             <MessageCard
      //               id={message.id}
      //               username={message.username}
      //               text={message.text}
      //               createdAt={message.createdAt}
      //               likes={message.likes}
      //             />
      //           </div>
      //         );
      //       })}
      //   </div>
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
