import React from "react";
import CoinList from "./CoinList.js";
import AddCoin from "./AddCoin.js";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome!</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <AddCoin />
      <CoinList />
    </section>
  );
};

export default Hero;
