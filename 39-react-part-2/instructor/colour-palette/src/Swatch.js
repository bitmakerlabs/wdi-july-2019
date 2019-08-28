import React, { Component } from 'react';
import Channel from './Channel';

class Swatch extends Component {

  state = {
    r: this.props.red,
    g: this.props.green,
    b: this.props.blue
  }

  setR = (value) => {
    this.setState({ r: value })
  }

  setG = (value) => {
    this.setState({ g: value })
  }

  setB = (value) => {
    this.setState({ b: value })
  }

  render() {
    const style = {
      backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`
    }

    return (
      <li className="swatch" style={style}>
        <div>rgb(</div>
        <Channel value={this.state.r} handleValueChange={this.setR} />
        <Channel value={this.state.g} handleValueChange={this.setG} />
        <Channel value={this.state.b} handleValueChange={this.setB} />
        <div>);</div>
      </li>
    );
  }

};

export default Swatch;
