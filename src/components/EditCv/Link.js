import React, { Component } from "react";

export class Input extends Component {
  state = {
    name: this.props.name,
    url: this.props.link,
    id: this.props.id,
  };

  changeLinkName(e) {
    this.setState(
      {
        name: e.currentTarget.value,
      },
      () => {
        const { name, id } = this.state;
        this.props.editLinkName(name, id);
      }
    );
  }

  changeLinkUrl(e) {
    this.setState(
      {
        url: e.target.value,
      },
      () => {
        const { url, id } = this.state;
        this.props.editLinkUrl(url, id);
      }
    );
  }

  render() {
    return [
      <label key="1" htmlFor="">
        {this.props.label}
      </label>,
      <div key="2" className="linkGrid">
        <input
          onChange={(e) => this.changeLinkName(e)}
          type="text"
          value={this.state.name}
        />
        <input
          onChange={(e) => this.changeLinkUrl(e)}
          type="text"
          value={this.state.url}
        />
        <button
          onClick={() => this.props.deleteLink(this.props.id)}
          className="deleteListingBtn"
        >
          <span className="mdi mdi-delete mdi-18px"></span>
        </button>
      </div>,
    ];
  }
}

export default Input;
