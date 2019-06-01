import React, { Component } from 'react';
import "./App.css";
//import MapRender from './components/MapRender';
//import SearchBar from './components/SearchBar'
//import Shop from '../src/components/Shop/Shop'
import Usersignup from "./components/User/UserSignup";
//import { Switch, Route } from "react-router-dom";
import AuthService from "../src/auth/AuthService";

class App extends Component {
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
        <Usersignup />
        {/* <Switch>
          <Route exact path="/user/signup" component={Usersignup} />
          <Route
            exact
            path="/user/login"
            render={() => <Login setUser={this.setUser} />}
          />
          <Route
            exact
            path="/secret"
            render={() => <Profile currentUser={this.state.user} />}
          />
        </Switch> */}
      </div>
    );
  }
}

export default App;
