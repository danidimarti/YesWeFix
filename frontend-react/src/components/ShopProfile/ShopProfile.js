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

  readMore = () => {
    document.getElementsByClassName("text").each(function() {
      let pTag = this.find("p");
      if (pTag.text().length > 50) {
        let shortText = pTag.text().substring(0, 200);
        pTag.addClass("full-text").hide();
        shortText += '<a href="#" class="read-more-link">Show more text ></a>"';
        pTag.append(
          '<a href="#" class="read-less-link">&lt; Show less text</a>'
        );
        this.append('<p class="preview">' + shortText + "</p>");
      }
    });
    document
      .getElementsByClassName("read-more-link")
      .addEventListener("click", function() {
        this.parent()
          .hide()
          .prev()
          .show();
      });

    document
      .getElementsByClassName("read-less-link")
      .addEventListener("click", function() {
        this.parent()
          .hide()
          .prev()
          .show();
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
            
            <ShopButton />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopProfile;
