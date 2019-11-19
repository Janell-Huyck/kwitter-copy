import React from "react";
import { Link } from ".";
class NewMessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://kwitter-api.herokuapp.com/messages", {
      method: "POST",
      text: JSON.stringify(`${this.state.value}`)
    })
      .then(function(data) {
        console.log("Request success: ", data);
      })
      .catch(function(error) {
        console.log("Request failure: ", error);
      });
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
          <button onClick={this.handleSubmit}>Post Message</button>
          <br />
          <Link to="/messagefeed">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default NewMessageBox;
