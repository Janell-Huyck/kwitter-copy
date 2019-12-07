import React from "react";
import { withAsyncAction } from "../HOCs";
import "./EditUserForm.css";
import { connect } from "react-redux";
import { DeleteUserButton, UploadUserPicture, EditUserProfileCard } from ".";
import { Link } from ".";
import { getUser } from "../../redux/index";

class EditUserForm extends React.Component {
  state = {
    username: this.props.username,
    password: "",
    displayName: "",
    about: "",
    error: false
  };
  check = () => {
    const { username, password, displayName } = this.state;
    if (username.trim().length < 3 || username.trim().length > 20) {
      return false;
    } else if (password.trim().length < 3 || password.trim().length > 20) {
      return false;
    } else if (
      displayName.trim().length < 3 ||
      displayName.trim().length > 20
    ) {
      return false;
    } else return true;
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.check) {
      this.props.updateUserInfo({
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.displayName,
        about: this.state.about
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (
      event.target.name === "password" ||
      event.target.name === "displayName"
    ) {
      if (
        event.target.value.trim().length < 3 ||
        event.target.value.trim().length > 20
      ) {
        event.target.style.color = "red";
      } else {
        event.target.style.color = "gray";
      }
    }
    if (event.target.name === "confirmNewPassword") {
      if (event.target.value !== event.state.password) {
        event.target.style.color = "red";
      } else {
        event.target.style.color = "gray";
      }
    }
  };

  render() {
    return (
      <div className="editPageArea">
        <div className="editColumnLeft">
          <form id="edit-profile-form" onSubmit={this.handleSubmit}>
            <h4>
              Edit User Info: (must submit new password and display name due to
              API constraints)
            </h4>
            <div className="ui big input">
              <div className="ui label big">New Password</div>
              <input
                type="password"
                name="password"
                required
                placeholder="3-20 characters, Req"
                onChange={this.handleChange}
              />
            </div>
            <div className="ui big input">
              <div className="ui label big">Confirm New Pw</div>
              <input
                type="password"
                name="confirmNewPassword"
                required
                placeholder="3-20 characters, Req"
                onChange={this.handleChange}
              />
            </div>
            <div className="ui big input">
              <div className="ui label big">New Display Name</div>
              <input
                type="text"
                name="displayName"
                placeholder="3-20 characters, Req"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="ui big input">
              <div className="ui label big">New About</div>
              <input
                type="text"
                name="about"
                placeholder="0-255 chrs"
                onChange={this.handleChange}
              />
            </div>
            <button className="ui button" id="editSubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="editColumnMiddle">
          <h4>Change Profile Picture</h4>
          <EditUserProfileCard profileName={this.props.username} />
          <UploadUserPicture username={this.props.username} />
        </div>
        <div className="editColumnRight">
          <DeleteUserButton username={this.props.username} />
          <Link to={`/profile/${this.props.username}`}>
            <button id="returnFromEdit">
              <h4>Go Back</h4>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username
  };
};

const mapDispatchToProps = { getUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAsyncAction("users", "updateUserInfo")(EditUserForm));
