import React from "react";
import { NewMessageBox } from ".";
import "./TheKweed.css";

class TheKweed extends React.Component {
  render() {
    return (
      <div className="kweedBox">
        <div className="leftBox">
          <NewMessageBox />
        </div>
        <div className="rightBox">
          <NewMessageBox />
          rightBox
        </div>
      </div>
    );
  }
}

export default TheKweed;
