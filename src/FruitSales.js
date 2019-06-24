import React, { Component } from "react";

class FruitSales extends Component {

    sumPrice(price){
        this.setState({total: this.state.total + price});
    }

    constructor(props){
        super(props);

        this.state = {
            total: 0
        };

        this.sumPrice = this.sumPrice.bind(this);
    }
  render() {
      console.log(this.props.items);

      var fruits = this.props.items.map((items, i) => {
        return <Fruits name={items.name} price={items.price} 
        key={i} sumPrice={this.sumPrice} active={items.active}
        />
      });

    return (
     <div>
         <h4>You can buy fruits: </h4>
         <div id="fruits">
         {fruits}
         <p id="total"> Total <b>{this.state.total}</b></p>
         </div>
     </div>
    );
  }
}

class Fruits extends Component{

    clicker(){
        var active = !this.state.active;
        this.setState({active: active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }

    constructor(props){
        super(props);

        this.state = {
            active: false
        };

        this.clicker = this.clicker.bind(this);
    }

    render(){
        return(
            <div>
                <p className={this.state.active ? 'active' : '' } onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
            </div>
        );
    }
}
export default FruitSales;
