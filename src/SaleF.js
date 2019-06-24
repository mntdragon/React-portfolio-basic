import React, { Component } from "react";
import FruitSales from "./FruitSales.js";
class SaleF extends Component {
  render() {
      var fruits = [
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
          <FruitSales items={fruits}/>
        </div>
      </section>
    );
  }
}

export default SaleF;
