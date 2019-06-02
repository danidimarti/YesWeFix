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

  service = new AuthService();

  setUser = user => {
    this.setState({ user: user });
  };

  fetchUser = () => {
    if (this.state.user === null) {
      this.service
        .currentUser()
        .then(response => {
          this.setState({ user: response });
        })
        .catch(err => {
          this.setState({ user: null });
        });
    }
  };

  componentDidMount() {
    this.fetchUser();
  }
  render() {
    return (
      <div>
      
        <Switch>
          <Route exact path="/user/signup" component={Usersignup} />
          <Route
            exact
            path="/user/login"
            render={() => <Userlogin setUser={this.setUser} />}
          />
          <Route
            exact
            path="/user/currentuser"
            render={() => <Userprofile currentUser={this.state.user} />}
          />
        </Switch>
      </div>
    );
  }
}

export default User;
