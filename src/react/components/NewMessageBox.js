import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import "./NewMessage.css";

class NewMessageBox extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  keyPress = event => {
    if (event.keyCode === 13) {
      this.props
        .postMessage({ text: this.state.value }, this.props.requestTag)
        .then(this.setState({ value: "" }));
    }
  };

  //
  //Thanks to https://stackoverflow.com/questions/43384039/how-to-get-input-textfield-values-when-enter-key-is-pressed-in-react-js/43384732
  //for the solution of how to get my textarea to submit with the enter key!
  //

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
        <form className="newMessageText">
          <textarea
            type="textarea"
            placeholder="What's Happening . . ."
            rows="7"
            columns="500"
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
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
