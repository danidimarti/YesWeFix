import React, { Component } from 'react';
import "./App.css";
//import MapRender from './components/MapRender';
//import SearchBar from './components/SearchBar'
//import Shop from '../src/components/Shop/Shop'
import User from "./components/User/User";
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
        <User />
        
      </div>
    );
  }
}

export default App;
