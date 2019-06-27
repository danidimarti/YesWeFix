/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MapRender from "../../components/Map/MapRender";
import ShopCards from "./ShopCards";
import Filter from "./Filter";
import shopData from "../Shop/shop-data/shoplist-data.js";
import { Redirect } from "react-router-dom";

import checkIfInBounds from "../../lib/geolib";
import "./Results.css";
import axios from "axios";
import { resolve } from "path";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      shopResults: [],
      shopData: "",
      newShopData: false,
      initialRender: true,
      filteredResults: []
    };
    this.getMapBounds = this.getMapBounds.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5001/auth/shops")
    .then(response => {
      this.setState({
        shopData: response.data
      });
    console.log("result:", response)
    debugger
    }).catch(err => {
      debugger
    })
    this.props.isResults(true);
    debugger
  }
  setInitialRender = cb => {
    this.setState({ initialRender: false }, cb);
  };
  setSelectedShop = shop => {
    this.setState({
      selectedShop: shop
    });
  };
  initialRenderTrue = () => {
    console.log("hit");
    this.setState({ initialRender: true });
  };

  getMapBounds(center) {
    let shopsInBound = [];
    let mapCenter = {
      lat: center.lat(),
      lng: center.lng()
    };
    console.log(mapCenter);

    // this.state.shopData.map(shop => {
    //   let shopLocation = {
    //     lat: parseFloat(shop.lat),
    //     lng: parseFloat(shop.lng)
    //   };
    //   if (checkIfInBounds(shopLocation, mapCenter)) {
    //     shopsInBound.push(shop);
    //   }
    // });
    this.setState({ shopResults: shopsInBound });
  }

  render() {
    const activeShop = this.state.selectedShop
      ? this.state.selectedShop.id
      : "";
    if (!this.props.location) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="flex-container">
          <div className="map-wrapper">
            <h2>Repair Shops in Amsterdam</h2>
            <MapRender
              location={this.props.location}
              getMapBounds={this.getMapBounds}
              shopData={shopData}
              initialRender={this.state.initialRender}
              setInitialRender={this.setInitialRender}
              setSelectedShop={this.setSelectedShop}
            />
          </div>
          <div className="shop-list">
            <ShopCards
              active={activeShop}
              shopResults={this.state.shopResults}
            />
          </div>
          {/* <Filter 
        className="container" 
        style={{display: "inline-block", position: "relative"}}
        shopResults={this.state.shopResults} /> */}
        </div>
        {/* <pre>{JSON.stringify(this.state.selectedShop, "\t", 2)}</pre> */}
      </div>
    );
  }
}

export default Results;
