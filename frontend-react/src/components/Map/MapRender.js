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
import * as shopData from "../Shop/shop-data/shoplist-data.json";
import MapStyle from "./MapStyle.js";

class MapRender extends Component {
  state = {
    location: this.props.location
  };
  render() {    
    
    const WrappedMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap defaultZoom={15} defaultCenter={this.state.location} />
      ))
    );
    console.log(this.props.location)
    return (
      <div>
        <WrappedMap
          googleMapURL={`${process.env.REACT_APP_GG_URL}`}
          //which elements (divs) is it going to place the map inside
          loadingElement={<div style={{  height: `100%` }} />}
          containerElement={<div style={{ width: "350px", height: `100%` }} />}
          mapElement={<div style={{ height: `500px` }} />}
          wrappedMap={WrappedMap}
        />
      </div>
    );
  }
}

export default MapRender;

/* {shopData.features.map(park => (
              <Marker
                key={park.properties.PARK_ID}
                position={{
                  lat: park.geometry.coordinates[1],
                  lng: park.geometry.coordinates[0]
                }}
                onClick={() => {
                  setSelectedShop(park);
                }}
                icon={{url:"../images/tool.svg", 
                scaledSize: new window.google.maps.Size(25, 25)
              }} */
/* />
            ))} */
/* {selectedShop && (
              <InfoWindow
                position={{
                  lat: selectedShop.geometry.coordinates[1],
                  lng: selectedShop.geometry.coordinates[0]
                }}
                onCloseClick={() => {
                  setSelectedShop(null);
                }}
              >
                <div>
                    <h2>{selectedShop.properties.NAME}</h2>
                    <p>{selectedShop.properties.DESCRIPTIO}</p>
                </div>
              </InfoWindow>
            )} */
