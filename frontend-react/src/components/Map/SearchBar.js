import React, { Component } from "react";
import Script from "react-load-script";

class SearchBar extends Component {
  state = {
    defaultCenter: "",
    
    address: "",
    query: ""
  };
  handleScriptLoad() {
    const input = document.getElementById("address-input"); //To disable any eslint 'google not defined' errors

    /*global google*/ var options = {
      types: ["address"]
    };
    //initialize Google Autocomplete and geocode
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener(
      "place_changed",
      this.handlePlaceSelect.bind(this)
    );
  }

  handlePlaceSelect() {
    //console.log(this.autocomplete.getPlace());
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        address: address.long_name,
        query: addressObject.formatted_address
      });
      console.log(address);
    }
  }

  render() {
    return (
      <section>
        <Script
          url={`${process.env.REACT_APP_GG_URL}`}
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <div>
          <input
            type="text"
            autoComplete="new-password"
            className="search-bar"
            id="address-input"
            name="address"
            placeholder="Enter address here..."
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </div>
      </section>
    );
  }
}
export default SearchBar;
