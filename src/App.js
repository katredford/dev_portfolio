import React, { useState } from "react";

import CurrentPage from "./components/CurrentPage";
import "./assets/index.css";
import "./assets/responsive.css";
import "./assets/images/hero.png";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  const [currentPageState, setCurrentPage] = useState("about");
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage}></Nav>
      <Header />
      <main>
        <CurrentPage currentPageState={currentPageState} />
      </main>
    </div>
  );
}

export default App;
