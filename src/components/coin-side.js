import React from "react";

import "./Coin.css";

const coinSide = props => {
  let headsOrTails = props.coinValue;

  return (
    <div className="coin-div">
      <img
        src={`https://tinyurl.com/react-coin-${headsOrTails}-jpg`}
        alt={`${headsOrTails}`}
      ></img>
    </div>
  );
};

export default coinSide;
