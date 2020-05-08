import React, { Component } from 'react';
import LeftAside from './LeftAside.js'
import RightAside from './RightAside.js'

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