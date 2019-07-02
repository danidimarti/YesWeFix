import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import AuthService from "../src/auth/AuthService";
//import axios from "axios"

import ShopLogin from "./components/Shop/ShopLogin";
import UserProfile from "./components/User/Userprofile";
import UserSignup from "./components/User/UserSignup";
import UserLogin from "./components/User/UserLogin";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Results from "./components/Results/Results";

import ShopForm from "./components/Shop/ShopForm";

import RequestForm from "./components/RequestForm/Requestform1";
import RequestList from "./components/RequestForm/Requestlist";
import RequestUserList from "./components/RequestForm/Requestuserlist";
import QuoteForm from "./components/QuoteForm/Quoteform";

import ShopProfile from "./components/ShopProfile/ShopProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);

    this.state = {
      user: null,
      location: null,
      isHome: true,
      isResults: true,
      
    };
    this.logout = this.logout.bind(this);
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

  fetchUserOrShop = () => {
    if (this.state.user === null) {
      this.service
        .currentUser()
        .then(response => {
          console.log("response", response);

          this.setState({ user: response });
        })
        .catch(err => {
          console.log(err);
          this.setState({ user: null });
        });
    }
  };

 
  
  componentDidMount() {
    
    this.fetchUserOrShop();
  }
  //Uplifting the location in the top level component
  setLocation(params) {
    this.setState({
      location: params
    });
  }

  logout() {
    this.service.logout();
    console.log("logout trigger");
    this.setState({ user: null });
    this.props.history.push('/')
  }

 
  render() {
    return (
      <div>
        <NavBar
          isHome={this.state.isHome}
          setLocation={this.setLocation}
          logout={this.logout}
        />
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
                isResults={this.state.isResults}
              />
            )}
          />
          {/* FIX SHOPFORM ROUTE */}
          <Route
            exact
            path="/auth/signup/shop"
            render={() => <ShopForm setUser={this.setUser} />}
          />
          <Route
            exact
            path="/auth/signup/user"
            render={props => {
              return <UserSignup {...props} setUser={this.setUser} />;
            }}
          />
          <Route
            path="/auth/login"
            render={props => {
              return <ShopLogin setUser={this.setUser}/>;
            }}
          />
          <Route
            path="/auth/login/user"
            render={props => {
              return <UserLogin {...props} setUser={this.setUser} />;
            }}
          />
          <Route
            path="/auth/currentuser/user"
            render={props => <UserProfile {...props} user={this.state.user} />}
          />
          <Route
            exact
            path="/results/:id"
            component={ShopProfile}
            getSingleShop={this.getSingleShop}
            fetchUserOrShop={this.fetchUserOrShop} 
            //render={props => <ShopDescription {...props} />}
          />

          <Route
            path="/auth/request/:shopId"
            render={props => (
              <RequestForm {...props} currentUser={this.state.user} />
            )}
          />
          <Route
            path="/auth/requestlist"
            fetchUserOrShop={this.fetchUserOrShop}
            render={props => (
              <RequestList {...props} currentUser={this.state.user} />
            )}
          />
          <Route
            path="/auth/requestuserlist"
            render={props => (
              <RequestUserList {...props} currentUser={this.state.user} />
            )}
          />
          <Route
            path="/auth/quoteform"
            render={props => (
              <QuoteForm {...props} currentUser={this.state.user} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
