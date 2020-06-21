import React from "react";
import "./Hello.css";

const Hello = (properties) => {
  return (
    <div className="f1 tc">
      <h1>Hello World!</h1>
      <p>Welcome React</p>
      <p>{properties.VietnameseGreeting}</p>
    </div>
  );
};

export default Hello;
