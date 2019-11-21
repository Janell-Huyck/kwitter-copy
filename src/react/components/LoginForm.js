import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    onCreateAccount: false,
    username: "",
    password: "",
    error: false,
    errorMessage: "",
    loading: false
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { error, username, password, loading } = this.state;
    return (
      <React.Fragment>
        <div>
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
            <Button size="huge" type="submit" disabled={loading}>
              Login
            </Button>
            <Link to="/register" className="buttonSize">
              Create Account
            </Link>
          </form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
        <div id="formStyle"></div>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
