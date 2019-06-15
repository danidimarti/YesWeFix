import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo-bg.png";
import "./NavBar.css";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
        <a className="navbar-brand" href="#">
          <img src={logo} className="square-logo" alt="logo" />
        </a>
        <div>
          <input
            type="submit"
            id="btn-user"
            className="input-group-btn"
            value="Signup"
            onClick={this.handleSubmit}
          />
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
