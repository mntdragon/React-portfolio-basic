import React, { Component } from "react";

class Timer extends Component {

  componentDidMount() {
    this.timer = setInterval(this.ticker, 1000)
}

  ticker() {
    this.setState({ clock: new Date() - this.props.start });
  }

  constructor(props) {
    super(props);

    this.state = {
      clock: 0
    };
    this.ticker = this.ticker.bind(this);
  }

  render() {
      var clock = Math.round(this.state.clock / 1000);
    return (
      <header>
        <h3>Tick Tock</h3>
        <h4>You are on this site since: </h4>
        <span className="timer">{clock}</span>
        <br />
        <span> seconds</span>
      </header>
    );
  }
}

export default Timer;
