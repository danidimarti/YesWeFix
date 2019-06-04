import React, { Component } from 'react';

import Usersignup from "./UserSignup";
import Userlogin from "./Userlogin";
import Userprofile from "./Userprofile";

import { Switch, Route } from "react-router-dom";
import AuthService from "../../auth/AuthService";

class User extends Component {
  state = {
    user: null
  };

  // service = new AuthService();

  // setUser = user => {
  //   this.setState({ user: user });
  // };

  // fetchUser = () => {
  //   if (this.state.user === null) {
  //     this.service
  //       .currentUser()
  //       .then(response => {
  //         this.setState({ user: response });
  //       })
  //       .catch(err => {
  //         this.setState({ user: null });
  //       });
  //   }
  // };

  componentDidMount() {
    // this.fetchUser();
  }
  render() {
    return (
      <div>
        <Usersignup />
            
      </div>
    );
  }
}

export default User;
