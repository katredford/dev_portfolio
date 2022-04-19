import React, { useState } from "react";

import CurrentPage from "./components/CurrentPage";
import "./assets/index.css";
import "./assets/responsive.css";
import "./assets/images/hero.png";
import Nav from "./components/Nav";
// import hero from "./assets/images/hero.png";

function App() {
  const [currentPageState, setCurrentPage] = useState("about");
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage}></Nav>
      <section className="hero">
        {/* <img src={hero} alt="cover" /> */}
        <h2>Where the magic happens!</h2>
      </section>
      <main>
        <CurrentPage currentPageState={currentPageState} />
      </main>
    </div>
  );
}

export default App;
