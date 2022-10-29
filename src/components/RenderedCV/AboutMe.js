import React, { Component } from "react";

export class AboutMe extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT ME</h2>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default AboutMe;
