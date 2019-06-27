import React, { Component } from "react";
import SmartphoneSales from "./SmartphoneSales.js";

class SaleS extends Component {
  render() {
      var smartphone = [
{name: 'Yubari King Melon', price: 100},
{name: 'Square Watermelon', price: 80},
{name: 'Ruby Roman Grapes', price: 140},
{name: 'Dekopon Citrus', price: 99}
      ];

    return (
      <section id="sale" className="two">
        <div className="container">
          <header>
            <h2>Pick And Poo</h2>
          </header>
          <SmartphoneSales items={smartphone}/>
        </div>
      </section>
    );
  }
}

export default SaleS;
