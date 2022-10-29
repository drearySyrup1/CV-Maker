import React, { Component } from "react";
import uniqid from "uniqid";

export class Input extends Component {
  state = {
    value: this.props.value,
  };

  handleChange = (e) => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        if (this.props.mainState === false) {
          this.props.changeMainState(
            this.props.category,
            this.props.name,
            this.state.value,
            this.props.id
          );
        } else {
          this.props.changeMainState(
            this.props.name,
            this.state.value
          );
        }
      }
    );
  };

  render() {
    return [
      <label key="1" htmlFor="">
        {this.props.label}
      </label>,
      <input
        key="2"
        onChange={this.handleChange}
        type="text"
        value={this.state.value}
      />,
    ];
  }
}

export default Input;
