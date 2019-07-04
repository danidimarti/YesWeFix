import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo-bg.png";
import "./NavBar.css";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "../components/Map/SearchBar"




class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  // logout = () => {
  //   return this.service.get("http://5001/auth/logout").then(response => {
  //     console.log(response);
  //     return response.message;
  //   });
  // };



  showMenu(e) {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
    document.addEventListener("click", this.closeMenu);
  }

  closeMenu() {
    this.setState({ isMenuOpen: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  

  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg lighten-1 nav-height">
        <Link className="navbar" to="/">
          <img src={logo} className="square-logo" alt="logo" />
        </Link>
       {this.props.location.pathname === '/' ? 
       <ul className="navbar-nav navbar-right partner-link">
       <li>
         <Link className="partner-link-a" to="/auth/signup/shop">
           Become a partner
         </Link>
       </li>
       </ul>
        : 
        this.props.location.pathname === '/results' ?  
       <SearchBar 
       styleNav={true}
       setLocation={this.props.setLocation}
       />
       :
        null
       
      } 
        

        <div className="btn-drop">
          <button
            type="submit"
            id="btn-user"
            className="input-group-btn dropdown-toggle"
            onClick={this.showMenu}
          >
            My Account
          </button>

          {this.state.isMenuOpen ? (
            <div className="dropdown-list">
              <ul className="menu" role="menu">
                <li>
                  <Link className="list-item" to="/auth/signup/user">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link className="list-item" to="/auth/login-user">
                    Log in
                  </Link>
                </li>
                <hr />
                <li >
                  {/* <button className="list-item-btn" onClick={this.props.logout}>  */}
                  <button className="list-item-btn" onClick={this.props.logout}> 
                  {/* <button className="list-item-btn" onClick={e => this.handleSubmit(e)}>  */}
                 
                     {/* <a onClick={this.props.logout} className="list-item">            
                    Log out
                    </a>  */}
                    Logout
                    </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavbarPage);
