import React from "react";
import { withAsyncAction } from "../HOCs";
import "./CreateUser.css";
import { Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Spinner } from ".";

// const jsonHeaders = {
//   "Content-Type": "application/json",
//   Accept: "application/json"
// };

class CreateUser extends React.Component {
  state = {
    username: "",
    password: "",
    displayName: ""
    // hasValidUsername: true,
    // hasValidPassword: true,
    // hasValidDisplayName: true,
    // userCreated: false,
    // message: "",
    // error: false
  };

  // createUser = () => {
  //   const { username, password, displayName } = this.state;
  //   const userData = {
  //     username,
  //     password,
  //     displayName
  //   };
  //   fetch("https://kwitter-api.herokuapp.com/users", {
  //     method: "POST",
  //     headers: jsonHeaders,
  //     body: JSON.stringify(userData)
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       if (data.statusCode === 200) {
  //         this.setState({
  //           userCreated: true
  //         });
  //       } else if (data.statusCode === 400) {
  //         this.setState({
  //           message: data.message,
  //           error: true
  //         });
  //       } else {
  //         this.setState({
  //           message: data.message,
  //           error: true
  //         });
  //       }
  //     });
  // };

  handleCreateUser = e => {
    e.preventDefault();
    // if (this.validate()) {
    //   this.createUser();
    // }
    this.props.postUser(this.state);
  };

  // validate = () => {
  //   const { username, password, displayName } = this.state;
  //   if (username.trim().length === 0) {
  //     this.setState({
  //       hasValidUsername: false
  //     });
  //     return false;
  //   } else {
  //     this.setState({
  //       hasValidUsername: true
  //     });
  //   }
  //   if (password.trim().length === 0) {
  //     this.setState({
  //       hasValidPassword: false
  //     });
  //     return false;
  //   } else {
  //     this.setState({
  //       hasValidPassword: true
  //     });
  //   }
  //   if (displayName.trim().length === 0) {
  //     this.setState({
  //       hasValidDisplayName: false
  //     });
  //     return false;
  //   } else {
  //     this.setState({
  //       hasValidDisplayName: true
  //     });
  //   }

  //   return true;
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // const {
    //   username,
    //   password,
    //   displayName,
    //   hasValidUsername,
    //   hasValidPassword,
    //   hasValidDisplayName,
    //   userCreated,
    //   error,
    //   message
    // } = this.state;

    const { loading, error } = this.props;

    // if (userCreated) {
    //   return <Redirect to="/" />;
    // }

    return (
      <React.Fragment>
        {/* <div> */}
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
              // value={username}
              // error={!hasValidUsername}
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
            // value={password}
            // error={!hasValidPassword}
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
            // value={displayName}
            // error={!hasValidDisplayName}
          />
          <Button
            // to="/"
            style={{ color: "#5A4576", marginTop: "1px" }}
            size="huge"
            type="submit"
            onClick={this.handleCreateUser}
            disabled={loading}
          >
            Register
          </Button>
          {/* <Link
              style={{ marginLeft: "70px" }}
              to="/"
              className="buttonSizeCreateUser"
            >
              Go Home
            </Link> */}
        </form>
        {error && (
          <p style={{ marginTop: "10px", color: "red", fontSize: "20px" }}>
            {error.message}
          </p>
        )}
        {loading && <Spinner name="circle" color="blue" />}
        {/* <div id="formStyle"></div> */}
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "postUser")(CreateUser);
