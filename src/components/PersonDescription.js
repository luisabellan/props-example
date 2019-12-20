import React from "react";

const PersonDescription = props => {
  return (
    <div>
      <h2>{props.description}</h2>
      <span>{props.favNumber("a test str value")}</span>
    </div>
  );
};

export default PersonDescription;
