import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import AuthService from "../src/auth/AuthService";

import ShopLogin from "./components/Shop/ShopLogin";
import UserProfile from "./components/User/Userprofile";
import UserSignup from "./components/User/UserSignup";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Results from "./components/Results/Results";

import ShopForm from "./components/Shop/ShopForm";
import ShopSignup from "./components/Shop/ShopSignup";

class App extends Component {
  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      user: null,
      location: null,
      isHome: true,
      isResults: true
    };
  }

  service = new AuthService();
  isHome = isHome => {
    this.setState({ isHome: isHome });
  };

  isResults = isResults => {
    this.setState({ isResults: isResults });
  };
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
          console.log(err);
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
    return (
      <div>
        <NavBar isHome={this.state.isHome} setLocation={this.setLocation} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                setLocation={this.setLocation}
                isHome={this.isHome}
              />
            )}
          />
          <Route
            exact
            path="/results"
            render={props => (
              <Results
                {...props}
                location={this.state.location}
                isResults={this.isResults}
              />
            )}
          />
          {/* FIX SHOPFORM ROUTE */}
          <Route
            exact
            path="/auth/signup/:isShop"
            render={props =>
              props.match.params.isShop === "shop" ? (
                <ShopForm />
              ) : (
                <UserSignup {...props} setUser={this.setUser} />
              )
            }
          />
          <Route
            path="/auth/login/:isShop"
            render={props =>
              props.match.params.isShop === "shop" ? (
                <ShopLogin />
              ) : (
                <UserSignup {...props} setUser={this.setUser} />
              )
            }
          />
          <Route
            path="/auth/profile"
            render={props => <UserProfile {...props} setUser={this.setUser} />}
          />
          <Route
            path="/auth/signup"
            render={props => <ShopForm {...props} setUser={this.setUser} />}
          />

          
        </Switch>
      </div>
    );
  }
}

export default App;
