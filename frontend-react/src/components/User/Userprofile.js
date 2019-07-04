import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    //console.log(this.props.user.username, "currentUser")

    return (
      <div>
        {/* {/* <h1>SECRET PAGE of {this.props.user.username}</h1> */}
        {this.props.user ? (
          <p>{this.props.user.username} is ALLOWED TO SEE SECRET</p>
        ) : (
          "USER DENIED"
        )}{" "}
        */}
        {/* <input>logout</input>
                <input type="submit" value="logout" /> */}
      </div>
    );
  }
}
