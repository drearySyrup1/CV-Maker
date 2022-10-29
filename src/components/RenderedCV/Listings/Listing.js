import React, { Component } from "react";

export class Listing extends Component {
  render() {
    return [
      <div key="1" className="job">
        <p className="job-title">{this.props.title}</p>
        <p>{this.props.location}</p>
        <p>{this.props.date}</p>
      </div>,
      <div key="2" className="job-info">
        <div className="connector"></div>
        <p className="role-name">{this.props.descTitle}</p>
        <p>{this.props.desc}</p>
      </div>,
    ];
  }
}

export default Listing;
