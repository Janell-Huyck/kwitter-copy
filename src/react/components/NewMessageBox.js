import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import "./NewMessage.css";

class NewMessageBox extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  postMessage = event => {
    event.preventDefault();
    this.props
      .postMessage({ text: this.state.value }, this.props.requestTag)
      .then(this.setState({ value: "" }));
  };

  handleCancel = event => {
    this.setState({ value: "" });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="newMessageBox">
        <i className="fas fa-user-edit fa-4x newMessageIcon" color="white" />
        {/* <form>
           <label for="name">Name:</label>
           <input type="text" name="name" id="name">
           <input type="submit" value="Submit">
        </form> */}
        {/* <form method="get" id="testformid">
          <input type="submit" />
        </form>
        <textarea
          form="testformid"
          name="taname"
          id="taid"
          cols="35"
          wrap="soft"
        ></textarea> */}
        <form className="newMessageText">
          <textarea
            type="textarea"
            placeholder="What's Happening . . ."
            rows="7"
            columns="500"
            onChange={this.handleChange}
            value={this.state.value}
            className="newMessageTextArea"
          ></textarea>
          <br />
          <div className="newMessageButtonDiv">
            <input
              type="submit"
              onClick={this.postMessage}
              className="newMessageButton"
              value="Send Kweet"
            ></input>
            <button className="newMessageButton" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(NewMessageBox);
