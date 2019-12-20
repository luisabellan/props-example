import React from "react";

const Greeting = props => {
  console.log("Props In Greeting", props);
  const welcomeMsg = `Welcome ${props.name}`;
  return <h1>{welcomeMsg}</h1>;
};

export default Greeting;
