import React, { Component } from 'react'

export default class Secret extends Component {
    render() {
        return (
            <div>
                <h1>SECRET PAGE of </h1>
                {this.props.currentUser ? <p>{this.props.currentUser.username} is ALLOWED TO SEE SECRET</p> : "USER DENIED"}
            </div>
        )
    }
}
