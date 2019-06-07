import React, { Component } from 'react'
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

/*global google*/
const MapComponent = withGoogleMap(props => {
  <GoogleMap
  defaultZoom={8}
  defaultCenter={{lat: -34.397, lng: 150.644}} >
    <Marker
    position={{lat: -34.397, lng: 150.644}}
    />
  </GoogleMap>
}

export class NearbySearch extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default NearbySearch
