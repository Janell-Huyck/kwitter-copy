import React from "react";
import { CreateUser } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Register extends React.Component {
  render() {
    return (
      <>
        <CreateUser />
      </>
    );
  }
}

export default userIsNotAuthenticated(Register);
