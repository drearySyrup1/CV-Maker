import React, { Component } from "react";

export class Photo extends Component {
  render() {
    return (
      <img
        className="photo"
        src="https://images.unsplash.com/photo-1509868918748-a554ad25f858?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFjZXx8fHx8fDE2NjY5MTA5NzU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
        alt=""
      />
    );
  }
}

export default Photo;
