import React from "react";

export function Links(props) {
  return (
    <div>
      <h2>WEBSITE & SOCIAL LINKS</h2>
      <div className="links">
        {props.links.map((link, i) => {
          return (
            <div key={i} className="link">
              <p>{link.name}</p>
              <p>{link.link}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
