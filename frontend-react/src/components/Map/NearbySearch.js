import { compose, withProps, withHandlers, withState } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import axios from "axios";
import React, { Component } from "react";
import Script from "react-load-script";
import "bootstrap/dist/css/bootstrap.css";
import Geosuggest from "react-geosuggest";

export class NearbySearch extends Component {
  /*global google*/
  state = {
    address: ""
  };

  componentWillMount() {
    const script = document.createElement("script");
    script.src = `${process.env.REACT_APP_GG_URL}`;
  }

  onSuggestSelect = suggest => {
    console.log(suggest);
  };

  handleScriptLoad() {
    const input = document.getElementById("address-input"); //To disable any eslint 'google not defined' errors

    /*global google*/

    var options = {
      types: ["address", ]
    };
    //initialize Google Autocomplete and geocode
    this.autocomplete = new google.maps.places.Autocomplete(input, options);
    this.autocomplete.addListener(
      "place_changed",
      this.handlePlaceSelect.bind(this)
    );
  }
  render() {
    return (
      <div>
        <div>
        <Script url={`${process.env.REACT_APP_GG_URL}`} 
        onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
        <div>
          <Geosuggest
            placeholder="Start typing!"
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(52.370216, 4.895168)}
            radius={20}
          />
        </div>
      </div>
    );
  }
}

export default NearbySearch;

// componentDidMount(){
//   axios.get(`${process.env.REACT_APP_GG_URL}`, {params: {

//    address: 'Amsterdam'
//   }
// })
// .then(response => {
//   console.log(response)
// })
// .catch(error => {
//   console.log('something went wrong', error)
// })
// }
