import React, { Component } from "react";
import CosmeticSales from "./CosmeticSales";
class SaleC extends Component {
  render() {
      var cosmetics = [
{name: 'InnisFree Greentea Gel', price: 55.5},
{name: 'Apieu Cushion 50SPF', price: 65.5},
{name: 'COSRX Acne Pimple Master', price: 122.5},
{name: 'BANILA CO Clean It Zero ', price: 139.5}
      ];

    return (
      <section id="sale" className="two">
        <div className="container">
          <header>
            <h2>Pick And Poo</h2>
          </header>
          <CosmeticSales items={cosmetics}/>
        </div>
      </section>
    );
  }
}

export default SaleC;
