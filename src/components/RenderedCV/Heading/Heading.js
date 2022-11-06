import React from "react";
import "./heading.css";

export function Heading(props) {
  return (
    <div className="heading-wrapper">
      <div className="left">
        <h1>{props.firstName}</h1>
        <h1>{props.lastName}</h1>
        <p>{props.occupation}</p>
      </div>
      <div className="right">
        <div className="heading-info-row">
          <span className="mdi mdi-map-marker"></span>
          <span>{props.address}</span>
        </div>
        <div className="heading-info-row">
          <span className="mdi mdi-phone"></span>
          <span>{props.phoneNumber}</span>
        </div>
        <div className="heading-info-row">
          <span className="mdi mdi-email"></span>
          <span>{props.email}</span>
        </div>
        <div className="heading-info-row">
          <span className="mdi mdi-earth"></span>
          <span>{props.website}</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;
