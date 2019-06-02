import React, { Component } from 'react';
import "./App.css";
//import MapRender from './components/MapRender';
//import SearchBar from './components/SearchBar'
//import Shop from '../src/components/Shop/Shop'
import User from "./components/User/User";
//import { Switch, Route } from "react-router-dom";
import AuthService from "../src/auth/AuthService";
import ShopForm from './components/Shop/ShopForm';

class App extends Component {

  render() {
    return (
      <div>
        <ShopForm />
        
      </div>
    );
  }
}

export default App;
