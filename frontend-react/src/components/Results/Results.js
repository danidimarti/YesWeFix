import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import MapRender from "../../components/Map/MapRender";

export class Results extends Component {
  render() {
    return (
      <div>
        <MapRender location={this.props.location} />
      </div>
    );
  }
}

export default Results;
