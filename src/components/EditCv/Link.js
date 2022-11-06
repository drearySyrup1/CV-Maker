import React, { useState } from "react";
import { useEffect } from "react";

export function Input(props) {
  const [name, setName] = useState(props.name);
  const [url, setUrl] = useState(props.link);
  const [id, setId] = useState(props.id);

  const changeLinkName = (e) => {
    setName(e.currentTarget.value);
  };

  const changeLinkUrl = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    props.editLinkName(name, id);
  }, [name]);

  useEffect(() => {
    props.editLinkUrl(url, id);
  }, [url]);

  return [
    <label key="1" htmlFor="">
      {props.label}
    </label>,
    <div key="2" className="linkGrid">
      <input
        onChange={(e) => changeLinkName(e)}
        type="text"
        f
        value={name}
      />
      <input
        onChange={(e) => changeLinkUrl(e)}
        type="text"
        value={url}
      />
      <button
        onClick={() => props.deleteLink(props.id)}
        className="deleteListingBtn"
      >
        <span className="mdi mdi-delete mdi-18px"></span>
      </button>
    </div>,
  ];
}

export default Input;
