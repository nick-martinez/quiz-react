import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Components/Quiz/Quiz";
import "./index.css"

var destination = document.getElementById("container");

ReactDOM.render(
  <div>
    <Quiz />
  </div>,
  destination
);