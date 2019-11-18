import React from "react";
import "./NewMessageBox.css";

class NewMessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A message was submitted: " + this.state.value);
    event.preventDefault();
  }

  handleCancel(event) {
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="newMessageBox">
        <i className="fas fa-user-edit fa-4x newMessageIcon" />
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
          <button onClick={this.handleSubmit}>Submit</button>
          <br />
          <button onClick={this.handleCancel}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default NewMessageBox;
