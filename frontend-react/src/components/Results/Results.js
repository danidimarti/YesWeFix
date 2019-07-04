/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import MapRender from "../../components/Map/MapRender";
import ShopCards from "./ShopCards";
import { Redirect } from "react-router-dom";

import checkIfInBounds from "../../lib/geolib";
import "./Results.css";
import axios from "axios";

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      shopResults: [],
      shopData: [],
      newShopData: false,
      initialRender: true,
      filteredResults: []
    };
    this.getMapBounds = this.getMapBounds.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/auth/results")
      .then(response => {
        console.log("fetch shops", response);
        this.setState({
          shopData: response.data
        });
        this.props.isResults(true);
      })
      .catch(err => {});
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
    let mapCenter = {
      lat: center.lat(),
      lng: center.lng()
    };
 
    this.state.shopData.reduce((shopsInBound, shop) => {
      let shopLocation = {
        lng: shop.lng,
        lat: shop.lat
      };

      if (checkIfInBounds(shopLocation, mapCenter)) {
        shopsInBound.push(shop);
        debugger
      }

      this.setState({ shopResults: shopsInBound });
      return shopsInBound;
    }, []);
  }

  render() {
    const activeShop = this.state.selectedShop
      ? this.state.selectedShop.id
      : "";
    if (!this.props.location) {
      return <Redirect to="/" />;
    }
    const { shopResults } = this.state;
    console.log(shopResults, "shop results in Results");
    return (
      <div>
        <div className="flex-container">
          <div className="map-wrapper">
            <h2>Repair Shops in Amsterdam</h2>
            <MapRender
              location={this.props.location}
              getMapBounds={this.getMapBounds}
              shopResults={shopResults}
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
