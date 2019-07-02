import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopProfile.css";

export class ShopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: this.props.getSingleShop,
      user: ""
    };
  }

  checkLoginStatusandShopId() {
    // if (this.props.fetchUserOrShop === null) {
    //   return <Redirect to="auth/login/user"/>
    // }
    console.log(this.props.getSingleShop);
  }

  //!TODO: ADD A CONDITIONAL TO CHECK IF THE USER IS LOGGEDIN

  render() {
    return (
      <div>
        {/* <Link to={`/auth/request/${this.shop._id}`}> */}
        <input
          id="request-btn"
          value="Request Quote"
          onClick={this.checkLoginStatusandShopId}
        />
        {/* </Link> */}
      </div>
    );
  }
}

export default ShopButton;
