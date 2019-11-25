import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import "./NewMessage.css";
import { connect } from "react-redux";

class NewMessageBox extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  postMessage = event => {
    event.preventDefault();
    this.props
      .postMessage({ text: this.state.value })
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
            placeholder="What's Happening . . ."
            rows="7"
            columns="500"
            onChange={this.handleChange}
            value={this.state.value}
            className="newMessageTextArea"
          ></textarea>
        </form>
        <br />
        <div className="newMessageButtonDiv">
          <button onClick={this.postMessage} className="newMessageButton">
            Send Kweet
          </button>
          <button className="newMessageButton" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    postMessage
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("messages", "postMessage")(NewMessageBox));
