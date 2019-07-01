import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopProfile.css";

export class ShopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: this.props.shopId,
      user: this.props.userId
    };
  }

  getShopAndUser = () => {
    
  }
  
    

  //!TODO: ADD A CONDITIONAL TO CHECK IF THE USER IS LOGGEDIN
  render() {
    return (
      <div>
        <input
          id="request-btn"
          type="submit"
          value="Request Quote"
          onClick={this.getShopId}
        />
      </div>
    );
  }
}

export default ShopButton;
