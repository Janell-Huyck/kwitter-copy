import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class UploadUserPicture extends React.Component {
  handleUploadUserPicture = event => {
    event.preventDefault();
    console.log("upload activated");
    const formData = new FormData(event.target);
    this.props.putUserPicture(formData);
  };
  render() {
    return (
      this.props.username === this.props.loggedInUserName && (
        <form onSubmit={this.handleUploadUserPicture}>
          <input type="file" name="picture"></input>
          <input type="submit" value="Upload Picture"></input>
        </form>
      )
    );
  }
}

const mapStateToProps = state => {
  return { loggedInUserName: state.auth.login.result.username };
};
//////////////check this - button is not rendering now.

export default connect(mapStateToProps)(
  withAsyncAction("users", "putUserPicture")(UploadUserPicture)
);
