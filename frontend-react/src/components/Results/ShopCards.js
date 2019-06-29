import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ShopCards.css";

export class ShopCards extends Component {
  render() {
    return (
      <div>
        
        {this.props.shopResults.map((shop, index) => (
          <div className={`containerStyle `}>
          
            <div className={`card cardStyle ${this.props.active === shop.id ? "active" : ""}` }
            style={{ borderRadius: "0" }}
            >
              <div className="card-image" style={{
                backgroundImage: `url("${shop.imageUrl}")`,
                borderRadius: "0"
              }}/>
              {/* <img
                src={shop.imageUrl}
                alt="Selected Shop"
                // style={{ borderRadius: "0" }}
                
                className="card-img-top"
              /> */}
              <div className="card-body">
                <h2 
                className="card-title" 
                
                >
                  {shop.shopname}
                </h2>
                <p
                className="card-text"
                 
                >
                  {shop.repairtype}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ShopCards;
