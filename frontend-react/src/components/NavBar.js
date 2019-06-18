import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo-bg.png";
import Dropdown from "react-bootstrap/DropdownButton";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./NavBar.css";

class NavbarPage extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
    document.addEventListener('click', this.closeMenu);
  }

 closeMenu() {
    this.setState({ isMenuOpen: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
        <a className="navbar-brand" href="#">
          <img src={logo} className="square-logo" alt="logo" />
        </a>

        <div className="btn-drop" >
          {/* <div> */}
          <button
            type="submit"
            id="btn-user"
            className="input-group-btn dropdown-toggle"
            onClick={this.showMenu}
          >My Account</button>
          {/* </div> */}
         
          {this.state.isMenuOpen ? (
            <div className='dropdown-list'>
            <ul className="menu" role="menu">
              <li >
                <a className="list-item" href="#">Signup</a>
              </li>
              <li >
                <a className="list-item" href="#">Log in</a>
              </li>
              <hr/>
              <li >
                <a className="list-item" href="#">Log out</a>
              </li>
            </ul>
            </div>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default NavbarPage;
