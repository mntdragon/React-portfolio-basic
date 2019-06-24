import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Intro from "./Intro.js";
import Portfolio from "./Portfolio.js";
import ProjectSale from "./ProjectSale.js";
import SaleC from "./SaleC.js";
import SaleS from "./SaleS.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

class App extends Component{
  render() {
  return (
    <div className="App">
      <div className="is-preload">
  
			<Header />
			<div id="main">
			<Intro />
			<Portfolio />
    
      <About />	
      <Contact />	
			</div>
		<Footer />
      </div>
    </div>
  );
}
}

export default App;
