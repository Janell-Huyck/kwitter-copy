import React from "react";
import { Link } from ".";
import { withAsyncAction } from "../HOCs";
import { Spinner } from ".";
import "./NewMessageBox.css"

class NewMessageBox extends React.Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  postMessage = event => {
    event.preventDefault();
    // console.log(this.state.value);
    console.log(this);
    this.props.postMessage({ text: this.state.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="newMessageBox">
        <i className="fas fa-user-edit fa-4x newMessageIcon" color="white" />
        <form className="newMessageText">
          <textarea
            rows="7"
            columns="500"
            onChange={this.handleChange}
            value={this.state.value}
            className="newMessageTextArea"
          ></textarea>
        </form>
        <br />
        <div className="newMessageButtonDiv">
          <button onClick={this.postMessage} className="buttonSize">
            Send Kweet
          </button>
          <br />
          <Link to="/messagefeed">
            <button className="buttonSize">Cancel</button>
          </Link>
        </div>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(NewMessageBox);
