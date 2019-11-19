import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Input, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div id="formStyle">
        <React.Fragment>
          <form id="login-form" onSubmit={this.handleLogin}>
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

            <Input
              size="huge"
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your Password"
              autoFocus
              required
              onChange={this.handleChange}
            />

            <Button size="huge" type="submit" disabled={loading}>
              Login
            </Button>
            <button className="createAccountButton" type="submit">
              Create Account
            </Link>
            
          </form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </React.Fragment>
      </div>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
