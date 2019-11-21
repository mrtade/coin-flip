import React, { Component } from "react";
import "./App.css";

import Flipme from "./components/flip-me";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flipme />
      </div>
    );
  }
}

export default App;
