import React from "react";

export default function Hero(props) {
  return (
     <section className="hero" style={{ backgroundImage: `url(${props.img})` }}>
      <h2>Where the magic happens!</h2>
    </section>
     
  );
}

//style={{ backgroundImage: `url(${hero})` }}