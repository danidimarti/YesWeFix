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
import pin from "./pin-sm.png";

class MapRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      selectedShop: null,
      shopData: this.props.shopData,
      bounds: null,
      loading: true
      // map: React.createRef()
    };
    this.map = React.createRef();
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("this is the props loc", this.props.location);
    console.log(nextProps.location);
    console.log(this.props.initialRender);
    if (this.props.initialRender) {
      console.log("initial render");
      this.props.setInitialRender();
      return true;
    }
    if (
      this.props.location.lat === nextProps.location.lat &&
      this.props.location.lng === nextProps.location.lng
    ) {
      console.log("should not render");
      return false;
    } else {
      return true;
    }
  }

  setShop = shop => {
    //const { value, name } = e.target;
    this.props.setSelectedShop(shop)
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
          defaultCenter={this.props.location}
        >
          {this.state.shopData.map((shop, index) => (
            <Marker
              key={shop.id}
              position={{
                lat: parseFloat(shop.lat),
                lng: parseFloat(shop.lng)
              }}
              onClick={() => {
                this.setShop(shop);
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
        {!this.state.loading ? (
          <WrappedMap
            onMapIdle={() => {
              // let bounds = this.map.getBounds();
              let center = this.map.getCenter();
              this.props.getMapBounds(center);
            }}
            googleMapURL={`${process.env.REACT_APP_GG_URL}`}
            //which elements (divs) is it going to place the map inside
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ width: "100%", height: `100%` }} />
            }
            mapElement={<div style={{ height: `500px` }} />}
            wrappedMap={WrappedMap}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default MapRender;
