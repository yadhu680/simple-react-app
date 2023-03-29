import React, { Component } from 'react';

export default class TimeTicker extends Component {
  constructor(props) {
    super(props);
    this.state = { isTimeStarted: false };
  }
  startTicker = () => {
    this.setState((state) => {
      return {
        isTimeStarted: state.isTimeStarted ? false : true,
      };
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" name="minutes" onChange={this.handleChange}></input>
        minutes
        <input type="text" name="seconds" onChange={this.handleChange}></input>
        seconds
        <button
          onClick={() => {
            this.startTicker();
          }}
        >
          START
        </button>
        <button>PAUSE/RESUME</button>
        <button>RESET</button>
        <br />
        <h3>
          {this.state.minutes}:{this.state.seconds}
        </h3>
      </div>
    );
  }
}
