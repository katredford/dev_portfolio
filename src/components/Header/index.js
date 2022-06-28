import React from "react";

import "../../assets/index.css";
import "../../assets/responsive.css";
//import hero from "../../assets/images/hero.png"
import source from "./hero.json";
import Hero from "../Hero";

function Header() {

  const hero = source.map(data => {
    return (
      <Hero
      key={data.id}
      {...data}
      />
      
    );
  })
  return (
    <div >
      {hero}
    </div>
  );
}

export default Header;
