import React from "react";

import "../../assets/index.css";
import "../../assets/responsive.css";
import hero from "./dev_portfolio/hero.png"

function Header() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <h2>Where the magic happens!</h2>
    </section>
  );
}

export default Header;
