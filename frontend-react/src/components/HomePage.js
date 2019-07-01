import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import SearchBar from './Map/SearchBar';
import "./HomePage.css";



class HomePage extends Component {

  render() {
    return (
      
        
          <div
        className="container home-intro">
          <div className="row">
            <div className="col-lg-12 col-md-1- col-sm-10 col-xs-12 col-md-push-2">
              <h1>Discover the best repair shops near you</h1>
              <SearchBar 
              setLocation={this.props.setLocation}
              
              />
              <section id="phone" />
                                   
            </div>
          </div>
        </div>
      
    );
  }
}
export default HomePage;
