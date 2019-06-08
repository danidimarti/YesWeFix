import React, { Component } from 'react';
import "./App.css";
//import MapRender from './components/MapRender';
//import SearchBar from './components/SearchBar'
//import Shop from '../src/components/Shop/Shop'
import User from "./components/User/User";
import Userlogin from "./components/User/Userlogin";
//import { Switch, Route } from "react-router-dom";
import AuthService from "../src/auth/AuthService";
//import ShopForm from './components/Shop/ShopForm';
import NearbySearch from './components/Map/NearbySearch'
//import SearchBar from './components/Map/SearchBar';
//import SearchBar from './components/Map/SearchBar';
//import NavBar from './components/NavBar'
//import HomePage from './components/HomePage'
import { Switch, Route } from 'react-router-dom';

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
        {/* <User /> */}

        <Switch>
          <Route exact path='/auth/user/signup' component={User}/>
          <Route path='/auth/user/login' component={Userlogin}/>
        </Switch>
        
       

        <section id='phone'>

        </section>
        </div>
    );
  }
}

export default App;
