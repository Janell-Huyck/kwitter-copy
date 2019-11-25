import React from "react";
import MessageCard from "./MessageCard";
import "./MessageList.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import { connect } from "react-redux";
import { getMessages } from "../../redux/actionCreators";

class MessageList extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  };

  getMessages = () => {
    this.props.getMessages();
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    getMessages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("messages", "getMessages")(MessageList));
