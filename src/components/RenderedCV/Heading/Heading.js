import React, { Component } from "react";
import "./heading.css";

export class Heading extends Component {
  render() {
    return (
      <div className="heading-wrapper">
        <div className="left">
          <h1>{this.props.firstName}</h1>
          <h1>{this.props.lastName}</h1>
          <p>{this.props.occupation}</p>
        </div>
        <div className="right">
          <div className="heading-info-row">
            <span className="mdi mdi-map-marker"></span>
            <span>{this.props.address}</span>
          </div>
          <div className="heading-info-row">
            <span className="mdi mdi-phone"></span>
            <span>{this.props.phoneNumber}</span>
          </div>
          <div className="heading-info-row">
            <span className="mdi mdi-email"></span>
            <span>{this.props.email}</span>
          </div>
          <div className="heading-info-row">
            <span className="mdi mdi-earth"></span>
            <span>{this.props.website}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Heading;
