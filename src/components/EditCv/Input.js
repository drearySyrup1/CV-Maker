import React, { useState, useEffect, useMemo } from "react";
import uniqid from "uniqid";

export function Input(props) {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (props.mainState === false) {
      props.changeMainState(
        props.category,
        props.name,
        value,
        props.id
      );
    } else {
      props.changeMainState(props.name, value);
    }
  }, [value]);

  return [
    <label key="1" htmlFor="">
      {props.label}
    </label>,
    <input
      key="2"
      onChange={handleChange}
      type="text"
      value={value}
    />,
  ];
}

export default Input;
