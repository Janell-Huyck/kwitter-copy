// import React from "react";
// import { withAsyncAction } from "../HOCs";
// import { Spinner, DeleteUserButton } from "../components";
// class UserCard extends React.Component {
//   componentDidMount() {
//     this.props.getUser("test");
//     //**********change this hard-coding "test" */
//   }

//   render() {
//     if (this.props.result === null) {
//       return <p>loading...</p>;
//     }

//     if (this.props.loading === true) {
//       return <Spinner />;
//     }

//     const user = this.props.result.user;
//     return (
//       <div style={}>
//         user card component
//         <img src="user.pictureLocation" />
//         <DeleteUserButton />
//       </div>
//     );
//   }
// }

// //adds mapstatetoprops
// //   loading, error, result
// //adds  mapdispatchtoprops
// //    getUser
// export default withAsyncAction("users", "getUser")(UserCard);
