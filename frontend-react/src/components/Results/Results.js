import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MapRender from "../../components/Map/MapRender";
import ShopCards from "../Shop/ShopCards";
import shopData from "../Shop/shop-data/shoplist-data.js";
import {Redirect} from 'react-router-dom'; 

export class Results extends Component {

    constructor(props) {
      super(props);
      this.state = {
        bounds: null,
        shopResults: [],
        shopData: shopData,
      };
      this.getMapBounds = this.getMapBounds.bind(this)
    }
    
    //componentDidMount(){
     // fetch('shopData')
      //.then(response => response.json())
     // .then(data => this.setState({results: data.shopResults}))
      //1. fetch shops from db 
      //2. setState with array of documents 
    //}

  getMapBounds(params) {
    console.log(params)
    this.isShopInBound(params)
  }

  isShopInBound(bounds){
   let shopsInBound = []
   this.state.shopsResults.map(shop => {
      
      
      //googlelogic.contain(params)
      if (true) {
        shopsInBound.push(shop)
       }
    })
    
  }

  render() {
    if (!this.props.location) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <MapRender
          location={this.props.location}
          getMapBounds={this.getMapBounds}
          shopData={shopData}
        />
        <ShopCards getMapBounds={this.getMapBounds} />
      </div>
    );
  }
}

export default Results;
