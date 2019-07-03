import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopProfile.css";
import UserProfile from "../User/Userprofile";
import RequestForm from "../RequestForm/Requestform1";

export class ShopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: "",
      user: "",
      shopData: "",
      directTo: ""
    };
  }
  componentDidMount() {
    if (this.props.shopData) {
      this.setState({
        shopData: this.props.shopData
      });
    }
  }

  checkLoginStatusandShopId = () => {
    if (localStorage.getItem("loggedIn")) {
      this.setState({
        directTo: "requestForm"
      });
    } else {
      this.setState({
        directTo: "login"
      });
    }

    // if (localStorage.getItem("loggedIn")) {
    //   return <UserProfile />;
    // } else {
    //   return <Redirect to="/auth/login/user" />;
    // }
  };

  render() {
    return (
      <div>
        {this.state.directTo === "requestForm" ? (
          <Redirect
            to={{
              pathname: "/auth/request",
              state: {
                shopId: this.props.shopData._id,
                shopName: this.props.shopData.shopname,
                currentUser: this.props.currentUser,
              }
            }}
          />
        ) : (
          ""
        )}
        {this.state.directTo === "login" ? (
          <Redirect
            to={{
              pathname: "/auth/login-user",
              state: { origin: `/results/${this.props.shopData._id}` }
            }}
          />
        ) : (
          ""
        )}
        {/* {!this.props.theUser ? <Redirect to="/auth/login/user" /> : */}
        <input
          id="request-btn"
          type="submit"
          value="Request Quote"
          onClick={this.checkLoginStatusandShopId}
        />
        {/* } */}
      </div>
    );
  }
}

export default ShopButton;

//<Link to={`/auth/request/${this.shop._id}`}>
