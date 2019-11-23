import React from "react";
import { NewMessageBox } from "../components";
import "./NewMessage.css";

class NewMessage extends React.Component {
  render() {
    return (
      <div className="newMessageArea">
        <h1>Create a New Message</h1>
        <p>
          Enter your new message inside the text box below and click "Post
          Message". To cancel, click "Cancel".
        </p>
        <NewMessageBox />
      </div>
    );
  }
}

export default NewMessage;
