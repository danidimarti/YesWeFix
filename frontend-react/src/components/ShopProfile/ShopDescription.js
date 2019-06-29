import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


export class ShopDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  componentDidMount() {
    this.getSingleShop();
  }

  getSingleShop = () => {
    const { params } = this.props.match;
    console.log("what is params", this.props.match.params)
    axios
      .get(`http://localhost:5001/auth/results/${params.id}`)
      .then(response => {
        let ShopDescription = response.data;
        console.log("Shop Description", ShopDescription)
        this.setState(ShopDescription);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.shopname}</h1>
        <p>this is a shop description </p>
      </div>
    );
  }
}

export default ShopDescription;
