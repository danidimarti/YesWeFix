import React, { Component } from "react";
import Script from "react-load-script";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchBar.css";
import MapRender from "./MapRender";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  state = {
    address: "",
    query: "",
    lat: null,
    lng: null,
    hideButton: false,
    styleNav: false
  };

  handleScriptLoad() {
    const input = document.getElementById("address-input"); //To disable any eslint 'google not defined' errors

    /*global google*/

    var options = {
      types: ["address"]
    };
    //initialize Google Autocomplete and geocode

    this.autocomplete = new google.maps.places.Autocomplete(input, options);

    this.autocomplete.addListener(
      "place_changed",
      this.handlePlaceSelect.bind(this)
    );

    this.searbox = new google.maps.places.SearchBox(this.autocomplete);
  }

  componentWillMount() {
   if(this.props.style) {
     return null;
   }
  
  }

  handlePlaceSelect() {
    // console.log(this.autocomplete.getPlace());
    // Extract List of Places From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    
    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        address: addressObject.formatted_address,
        query: addressObject.formatted_address,
        lat: addressObject.geometry.location.lat(),
        lng: addressObject.geometry.location.lng()
      });
      

      if (this.props.hideButton) {
        this.props.setLatLng(this.state.lat, this.state.lng, this.state.address);
       }
      
      console.log(address);
    }
  }

  handleSubmit(e) {
    console.log(e);
     e.preventDefault();
    if (this.props.hideButton) {
      return;
    }
     
    let addressObject = this.autocomplete.getPlace();
    if (addressObject) {
      // Geometry
      let lat = addressObject.geometry.location.lat();
      let lng = addressObject.geometry.location.lng();
      console.log(lat, lng);
      this.props.setLocation({ lat, lng });
      this.props.history.push("/results");
     
    }
  }
  

  render() {
    const hideButton = this.props.hideButton ? "hideButton" : "";
    const styleNav = this.props.styleNav ? "styleNav" : "";

    return (
      <div>
        <Script
          url={`${process.env.REACT_APP_GG_URL}`}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <form  style={{ paddingTop: "20px" }}>
          <div  className={`${styleNav}`} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              id="address-input"
              name="address"
              placeholder="Enter address here..."
              
            />
            <input
              type="submit"
              id="submit"
              className={`${hideButton}`}
              value="Find Shop"
              onClick={e => this.handleSubmit(e)}
              
            />
          </div>
        </form>
      </div>
    );
  }
}




export default withRouter(SearchBar);
