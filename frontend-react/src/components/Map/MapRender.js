//usestate allows the use of state without writing a class
import React, { Component, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from "react-google-maps";

import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
//we need to import the data model form repair shops
import * as shopData from "../Shop/shop-data/shoplist-data.json";
import MapStyle from "./MapStyle.js";
Geocode.enableDebug();

const Map = () => {
  const [selectedShop, setSelectedShop] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      //defaultOptions={{styles: MapStyle}}
    >
      {shopData.features.map(park => (
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
        }}
        />
      ))}
      {selectedShop && (
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
      )}
    </GoogleMap>
  );
};

//Google Maps needs a script that loads all different google libraries
//Wrap the map inside the withScriptsjs: embeds the G Script on the page
//this will load the map
const WrappedMap = withScriptjs(withGoogleMap(Map));

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC06Bq48L4lZa0KkHVfsH0ptiDQOFrgSQI`}
          //which elements (divs) is it going to place the map inside
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `400px` }} />}
        />
      </div>
    );
  }
}

export default SearchBar;
