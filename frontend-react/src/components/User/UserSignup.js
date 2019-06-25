import React, { Component } from "react";
import AuthService from "../../auth/AuthService";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./User.css";
import { Link } from "react-router-dom";

class Usersignup extends Component {
  //rconst shortcut
  constructor(props) {
    super(props)
  
    this.state = {
      username: "",
      password: "",
      mobile: "",
      email: "",
      redirect: false
    }
  }
  
 

 
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
        const settingUser = this.props.setUser(response)
        this.setState({
          redirect: true,
          userState: settingUser
        });
      });
  };



  render() {
    
    return (
      <div className="container" style={{ width: "60%" }}>
        <div className=" row justify-content-center">
          <div className="col-md-8" style={{ borderRadius: "0" }}>
            {this.state.redirect ? <Redirect to="/auth/login" /> : ""}
            <div className="card" style={{ borderRadius: "0", borderColor: "black", borderWidth: 0.5 }}>
              <div
                className="card-header green-color white-text text-center"
                style={{ borderRadius: "0", marginBottom: "0px" }}
              >
                Sign up
              </div>
              <form
                className="form-horizontal"
                onSubmit={e => this.handleSubmit(e)}
              >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i class="fa fa-user fa" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.changeHandler(e)}
                      className="input"
                      placeholder="Email"
                    />
                  </div>

                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope fa" aria-hidden="true" />
                      </span>
                      <input
                        type="text"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={e => this.changeHandler(e)}
                        className="input"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.changeHandler(e)}
                    className="input"
                    placeholder="Username"
                  />
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope fa" aria-hidden="true" />
                      </span>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.changeHandler(e)}
                        className="input"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <input id="submit-user" className="btn-form btn-info" type="submit" value="Submit" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-black text-size">
                  Already have an account?{" "}
                  <Link className="text-info" to="/auth/login">
                    Login in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
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
