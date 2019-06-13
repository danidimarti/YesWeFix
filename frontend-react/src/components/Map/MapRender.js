//usestate allows the use of state without writing a class
import React, { Component, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from "react-google-maps";
//we need to import the data model form repair shops
import shopData from "../Shop/shop-data/shoplist-data.js";
import MapStyle from "./MapStyle.js";
import pin from "./pin-sm.png";

class MapRender extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: this.props.location,
      selectedShop: null,
      shopData: shopData,
      bounds: null,
      loading: true
      // map: React.createRef()
    
    };
    this.map = React.createRef();
  }
  
  
  componentDidMount(){
    this.setState({
      loading: false
    })
  }
  // selectedShop = shop => {
  //   this.setState({
  //     selectedShop: shop
  //   });

  // };

  setSelectedShop = shop => {
    console.log(shop);
    //const { value, name } = e.target;
    this.setState({
      selectedShop: shop
    });
  };

  setBounds = () => {
    this.setState({
      bounds: true
    });
  };

  render() { 
    //const bounds = new window.google.maps.LatLngBounds()
    const WrappedMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap 
        ref={map => {
          this.map = map;
        }}
        onIdle={props.onMapIdle}
        defaultZoom={15} 
        defaultCenter={this.state.location} >
          {this.state.shopData.map((shop, index) => (
            <Marker
              key={shop.id}
              position={{
                lat: parseFloat(shop.lat),
                lng: parseFloat(shop.lng)
              }}
              onClick={() => {
                this.setSelectedShop(shop);
              }}
              icon={pin}
              animation={window.google.maps.Animation.DROP}
            />
          ))}
          {this.state.selectedShop && (
            <InfoWindow
              position={{
                lat: parseFloat(this.state.selectedShop.lat),
                lng: parseFloat(this.state.selectedShop.lng)
              }}
              onCloseClick={() => {
                this.setSelectedShop(null);
              }}
            >
              <div>
                <h2 style={{ fontSize: 18 }}>
                  {this.state.selectedShop.businessname}
                </h2>
                <p
                  style={{ fontStyle: "italic", fontWeight: 400, fontSize: 12 }}
                >
                  {this.state.selectedShop.repairtype}
                </p>
                <img
                  src={this.state.selectedShop.imageUrl}
                  alt="Selected Shop"
                  style={{ width: 200 }}
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ))
    );

    return (
      <div>
       {!this.state.loading ?  <WrappedMap
         onMapIdle={() => {
          let ne = this.map.getBounds().getNorthEast();
          let sw = this.map.getBounds().getSouthWest();
          console.log("Northeast bound is:", ne.lat() + ";" + ne.lng());
          console.log("Southwest bound is:", sw.lat() + ";" + sw.lng());
        }}
          googleMapURL={`${process.env.REACT_APP_GG_URL}`}
          //which elements (divs) is it going to place the map inside
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ width: "350px", height: `100%` }} />}
          mapElement={<div style={{ height: `500px` }} />}
          wrappedMap={WrappedMap}
        /> : ""}
      </div>
    );
  }
}

export default MapRender;
