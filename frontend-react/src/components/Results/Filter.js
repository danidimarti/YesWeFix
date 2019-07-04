
import React, { Component } from 'react'
import shopData from "../Shop/shop-data/shoplist-data.js";

export class Filter extends Component {
    
    render() {
       
        return (
            <div>
             {this.props.shopResults}


            </div>
        )
    }
}

export default Filter

