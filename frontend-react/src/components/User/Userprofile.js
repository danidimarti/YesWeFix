import React, { Component } from 'react'

export default class Secret extends Component {
    // handleSubmit = (e) => {
    //     e.preventDefault();
  
    //     const username = this.state.username;
    //     const password = this.state.password;
  
    //     this.service.login(username, password)
    //       .then(response => {
    //           console.log(response);
    //           // this.props.setUser(response)
    //       })
    // }

    render() {
        return (
            <div>
                <h1>SECRET PAGE of </h1>
                {this.props.currentUser ? <p>{this.props.currentUser.username} is ALLOWED TO SEE SECRET</p> : "USER DENIED"}
                {/* <input>logout</input>
                <input type="submit" value="logout" /> */}
            </div>
        )
    }
}
