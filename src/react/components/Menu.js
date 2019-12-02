import React from "react";
import { NavLink } from ".";
import "./Menu.css";
import { withAsyncAction, connect } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="menu">
        <h1>Kwitter</h1>
        {this.props.isAuthenticated && (
          <div className="menu-links">
            <NavLink
              activeClassName="selected"
              to={`/profile/${this.props.username}`}
            >
              {" "}
              Profile
            </NavLink>
            <NavLink activeClassName="selected" to="/messagefeed">
              Kweed
            </NavLink>
            <NavLink
              activeClassName="selected"
              to="/"
              onClick={this.handleLogout}
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.login.result) {
    return { username: state.auth.login.result.username };
  } else return {};
};
export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(Menu)
);
