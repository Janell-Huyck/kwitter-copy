import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";
import { connect } from "react-redux";

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
            <Link to={`/profile/${this.props.username}`}> Profile</Link>

            <Link to="/messagefeed">Kweed</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
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
