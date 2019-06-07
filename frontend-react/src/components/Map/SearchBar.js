import React, { Component } from "react";
import Script from "react-load-script";
import "bootstrap/dist/css/bootstrap.css";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    address: "",
    query: ""
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

  handlePlaceSelect() {
    console.log(this.autocomplete.getPlace());
    // Extract List of Places From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        address: address.formatted_address,
        query: addressObject.formatted_address
      });
      //console.log(address);
    }
  }

  handleSubmit() {
    let addressObject = this.autocomplete.getPlace();

    // Geometry
    var lat = addressObject.geometry.location.lat;
    var lng = addressObject.geometry.location.lng;
    console.log(lat, lng);
  }

  render() {
    return (
      <div>
        <Script
          url={`${process.env.REACT_APP_GG_URL}`}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <form style={{ paddingTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              id="address-input"
              name="address"
              placeholder="Enter address here..."

              //style={{ width: `500px` }}
            />

            <input
              type="submit"
              id="submit"
              className="input-group-btn"
              value="Find Shop"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
