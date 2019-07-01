import React, { Component } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopProfile.css" 


export class ShopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
 
 
//!TODO: ADD A CONDITIONAL TO CHECK IF THE USER IS LOGGEDIN
  render() {
    return (
      <div>
        <Link to="/auth/requestform">
                <input id="request-btn" value="Request Quote" />
              </Link>
      </div>
    );
  }
}

export default ShopButton;
