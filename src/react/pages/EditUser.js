import React from "react";
import { Menu, EditUserForm, Link } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { connect } from 'react-redux'

class EditUser extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <EditUserForm />
          <Link to={`/profile/${this.props.username}`}><h4>Go Back</h4></Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return {
      username: state.auth.login.result.username
    };
  } else return {};
};

export default connect(mapStateToProps)(userIsAuthenticated(EditUser));
