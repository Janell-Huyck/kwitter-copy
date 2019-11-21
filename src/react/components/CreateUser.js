import React from "react";
import { withAsyncAction } from "../HOCs";
import "./CreateUser.css";
import { Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class CreateUser extends React.Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password, displayName } = this.state;
    return (
      <React.Fragment>
        <div>
          <form id="register-form" onSubmit={this.handleLogin}>
            <h1>Register</h1>
            <Input
              size="huge"
              label="Username"
              type="text"
              name="username"
              placeholder="Enter your Name"
              autoFocus
              required
              onChange={this.handleChange}
              value={username}
            />
            <Input
              size="huge"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
              onChange={this.handleChange}
              value={password}
            />
            <Input
              size="huge"
              label="Display Name"
              type="text"
              name="displayName"
              placeholder="Enter your full name"
              required
              onChange={this.handleChange}
              value={displayName}
            />
            <Button size="huge" type="submit">
              Register
            </Button>
            <Link to="/" className="buttonSizeCreateUser">
              Go Home
            </Link>
          </form>
          <div id="formStyle"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(CreateUser);
