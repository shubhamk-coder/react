import React from "react";

import NavBar from "./NavBar";
import MastHead from "./MastHead";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Modal from "./Modal";

function App() {
  return (
    <div>
      <NavBar />
      <MastHead />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
