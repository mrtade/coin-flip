import React, { Component } from "react";

import Coinside from "./coin-side";

import "./FlipWrap.css";

class FlipMe extends Component {
  state = {
    flipResult: "",
    headsCount: 0,
    tailsCount: 0,
    totalCount: 0,
    flipsInit: false
  };

  flipHandler = () => {
    const coinSidesArray = ["heads", "tails"];
    let coinIndex = Math.floor(Math.random() * 2);
    let flipCoin = coinSidesArray[coinIndex];

    const tempState = { ...this.state };

    tempState.flipsInit = true;

    if (tempState.flipsInit === true) {
      this.setState({
        flipsInit: tempState.flipsInit
      });

      tempState.totalCount = tempState.totalCount + 1;
      this.setState({
        totalCount: tempState.totalCount
      });
    }

    tempState.flipResult = flipCoin;
    this.setState({
      flipResult: tempState.flipResult
    });

    if (tempState.flipResult === "heads") {
      tempState.headsCount = tempState.headsCount + 1;
      this.setState({
        headsCount: tempState.headsCount
      });
    } else if (tempState.flipResult === "tails") {
      tempState.tailsCount = tempState.tailsCount + 1;
      this.setState({
        tailsCount: tempState.tailsCount
      });
    }
  };

  resetHandler = () => {
    const tempState = {
      flipResult: "",
      headsCount: 0,
      tailsCount: 0,
      totalCount: 0,
      flipsInit: false
    };

    this.setState({
      flipResult: tempState.flipResult,
      headsCount: tempState.headsCount,
      tailsCount: tempState.tailsCount,
      totalCount: tempState.totalCount,
      flipsInit: tempState.flipsInit
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Let's flip a coin!</h2>
        <Coinside coinValue={this.state.flipResult} />
        <button onClick={this.flipHandler}>Flip Me!</button>
        <button onClick={this.resetHandler}>Reset!</button>

        <p>
          Out of {this.state.totalCount} flips, there have been{" "}
          {this.state.headsCount} heads and {this.state.tailsCount} tails
        </p>
      </div>
    );
  }
}

export default FlipMe;
