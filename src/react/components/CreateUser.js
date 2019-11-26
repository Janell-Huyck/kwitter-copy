import React from "react";
import { withAsyncAction } from "../HOCs";
import "./CreateUser.css";
import { Input, Button } from "semantic-ui-react";
import { Spinner } from ".";

class CreateUser extends React.Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };

  handleCreateUser = e => {
    e.preventDefault();
    this.props.postUser(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <React.Fragment>
        <form id="register-form" onSubmit={this.handleCreateUser}>
          <h1>Register</h1>
          <div>
            <Input
              size="huge"
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your Name"
              autoFocus
              required
              onChange={this.handleChange}
            />
          </div>
          <Input
            size="huge"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={this.handleChange}
            required
          />
          <Input
            size="huge"
            label="Display Name"
            type="text"
            name="displayName"
            placeholder="Enter your full name"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <Button
            style={{ color: "#5A4576", marginTop: "1px" }}
            size="huge"
            type="submit"
            onClick={this.handleCreateUser}
            disabled={loading}
          >
            Register
          </Button>
        </form>
        {error && (
          <p style={{ marginTop: "10px", color: "red", fontSize: "20px" }}>
            {error.message}
          </p>
        )}
        {loading && <Spinner name="circle" color="blue" />}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "postUser")(CreateUser);
