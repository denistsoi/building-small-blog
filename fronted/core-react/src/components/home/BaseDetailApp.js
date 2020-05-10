import React, { Component } from "react";
import LeftAside from "../common/LeftAside.js";
import RightAside from "./BaseRightAside.js";

const App = (props) => (
  <div>
    <LeftAside></LeftAside>
    <RightAside {...props}></RightAside>
  </div>
);

export default App;
