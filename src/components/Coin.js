import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1>{name}</h1>
      <img src={icon} alt="" />
      <h3>Price: ${(Math.round(price * 100) / 100).toFixed(2)}</h3>
      <h3>Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
