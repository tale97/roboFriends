import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import Card from "./Card";
import { robots, moreRobots } from "./robots";

ReactDOM.render(
  <div>
    <Card id={robots[0].id} name={robots[0].name} age={robots[0].age} />
    <Card id={robots[1].id} name={robots[1].name} age={robots[1].age} />
    <Card id={robots[2].id} name={robots[2].name} age={robots[2].age} />
    <Card id={robots[3].id} name={robots[3].name} age={robots[3].age} />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
