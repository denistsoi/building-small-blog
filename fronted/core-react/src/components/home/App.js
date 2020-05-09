import React, { Component } from "react";
import LeftAside from "../common/LeftAside.js";
import RightAside from "./BaseRightAside.js";

class App extends Component {
  render() {
    return (
      <div>
        <LeftAside></LeftAside>
        <RightAside></RightAside>
      </div>
    );
  }
}

export default App;
