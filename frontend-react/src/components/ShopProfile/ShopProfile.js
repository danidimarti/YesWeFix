import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopProfile.css";
import ShopButton from "./ShopButton";
import {
  faTools,
  faMapMarkerAlt,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ShopProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleShop();
  }

  getSingleShop = () => {
    const { params } = this.props.match;
    console.log("what is params", this.props.match.params);
    axios
      .get(`http://localhost:5001/auth/results/${params.id}`)
      .then(response => {
        let ShopDescription = response.data;
        console.log("Shop Description", ShopDescription);
        this.setState(ShopDescription);
      })
      .catch(err => {
        console.log(err);
      });
  };



  render() {
    return (
      <div>
        <div
          className="shop-profile"
          style={{
            backgroundImage: `url("${this.state.imageUrl}")`,
            borderRadius: "0"
          }}
        />
        <div className="page">
          <div className="description">
            <h1>{this.state.shopname}</h1>
            <br />
            <p>
              <FontAwesomeIcon icon={faTools} />
              {"  "} {this.state.repairtype}
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {"  "}
              {this.state.streetname}
            </p>
            <hr />
            <h5>Description</h5>
            <p className="text">{this.state.description}</p>
          </div>
          <div className="btn-box">
            <h3>{this.state.shopname}</h3>

            <p>{this.state.streetname}</p>
          <div className="star">
          <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
            <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
            <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
            <FontAwesomeIcon style={{color: "orange"}} icon={faStar} />
            <FontAwesomeIcon style={{color: "orange"}} icon={faStarHalfAlt} />
            </div>
            
            <ShopButton
            getSingleShop={this.props.getSingleShop}
            fetchUserOrShop={() => this.props.fetchUserOrShop()} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopProfile;
