import React, { Component } from "react";
import "./App.css";
import {Route, Switch, Link} from 'react-router-dom'
//import MapRender from './components/MapRender';
//import SearchBar from './components/SearchBar'
//import Shop from '../src/components/Shop/Shop'
import User from "./components/User/User";
import Userlogin from "./components/User/Userlogin";
//import { Switch, Route } from "react-router-dom";
import AuthService from "../src/auth/AuthService";
//import ShopForm from './components/Shop/ShopForm';
import NearbySearch from "./components/Map/NearbySearch";
import SearchBar from "./components/Map/SearchBar";
//import SearchBar from './components/Map/SearchBar';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Results from "./components/Results/Results"


class App extends Component {
  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      user: null,
      location: null
    };
  }

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
  //Uplifting the location in the top level component
  setLocation(params) {
    this.setState({
      location: params
    });
  }
  render() {
    const locationIsSet = this.state.location !== null
    return (
      <div>
        
        <NavBar />
        <Switch>
          <Route exact path='/'  render={props => <HomePage {...props} setLocation={this.setLocation}/>   }/>
          <Route exact path='/auth/user/signup' component={User}/>
          <Route path='/auth/user/login' component={Userlogin}/>
          <Route exact path="/results" render={props => <Results {...props}  location={this.state.location} /> } />
        
        </Switch>
      
        
        
        {/* {locationIsSet ? <Results /> : alert("Insert address dumbass")} */}
      </div>

    );
  }
}

export default App;
