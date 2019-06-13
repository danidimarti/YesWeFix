import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./User.css";

class Usersignup extends Component {
  state = {
    username: "",
    password: "",
    mobile: "",
    email: "",
    redirect: false
  };

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/auth/user/login' />
  //   }
  // }

  authService = new AuthService();

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const mobile = this.state.mobile;

    this.authService
      .signup(username, password, email, mobile)
      .then(response => {
        console.log(response);
        this.setState({
          redirect: true
        });
      });
  };

  render() {
    return (
      <div className="card">
        {this.state.redirect ? <Redirect to="/auth/user/login" /> : ""}
        <form className="text-center" onSubmit={e => this.handleSubmit(e)}>
          <h1 className="card-header green-color white-text text-center py-4">
            SIGNUP
          </h1>
          <div className="card-body px-lg-5 pt-0">
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.changeHandler(e)}
            className="input"
          />
          <input
            type="text"
            name="mobile"
            value={this.state.mobile}
            onChange={e => this.changeHandler(e)}
            className="input"
          />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.changeHandler(e)}
            className="input"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.changeHandler(e)}
            className="input"
          />
          <input id="submit" type="submit" value="Sign in" />
        </div>
        </form>
      </div>
    );
  }
}

export default Usersignup;

// <!-- Material form register -->
// <div class="card">

//     <h5 class="card-header info-color white-text text-center py-4">
//         <strong>Sign up</strong>
//     </h5>

//     <!--Card content-->
//     <div class="card-body px-lg-5 pt-0">

//         <!-- Form -->
//         <form class="text-center" style="color: #757575;">

//             <!-- E-mail -->
//             <div class="md-form mt-0">
//                 <input type="email" id="materialRegisterFormEmail" class="form-control">
//                 <label for="materialRegisterFormEmail">E-mail</label>
//             </div>

//           <!-- Phone number -->
//             <div class="md-form">
//                 <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock">
//                 <label for="materialRegisterFormPhone">Phone number</label>
//                             </div>

//           <!-- E-mail -->
//             <div class="md-form mt-0">
//                 <input type="text" id="materialRegisterFormUsername" class="form-control">
//                 <label for="materialRegisterFormEmail">Username</label>
//             </div>
//             <!-- Password -->
//             <div class="md-form">
//                 <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock">
//                 <label for="materialRegisterFormPassword">Password</label>
//                 <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
//                     At least 8 characters and 1 digit
//                 </small>
//             </div>

//             <!-- Newsletter -->
//             <div class="form-check">
//                 <input type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter">
//                 <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter to receive coupons and special discounts</label>
//             </div>

//             <!-- Sign up button -->
//             <button class="btn btn-outline-info btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

//             <!-- Social register -->

//             <hr>

//             <!-- Terms of service -->
//             <p>By clicking
//                 <em>Sign up</em> you agree to our
//                 <a href="" target="_blank">terms of service</a>

//         </form>
//         <!-- Form -->

//     </div>

// </div>
// <!-- Material form register --></div>
