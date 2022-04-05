import React, { useState } from "react";

import CurrentPage from "./components/CurrentPage";
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Work from './components/Work';


function App() {
  const [currentPageState, setCurrentPage] = useState("about");
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage}></Nav>
      <main>
      <CurrentPage currentPageState={currentPageState} />
      </main>
    </div>
  );
}

export default App;
