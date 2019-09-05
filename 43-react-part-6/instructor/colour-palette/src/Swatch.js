import React from 'react';
import Channel from './Channel';

class Swatch extends React.Component {

  state = {
    r: this.props.red,
    g: this.props.green,
    b: this.props.blue
  }

  setR = (v) => {
    this.setState({ r: v })
  }

  setG = (v) => {
    this.setState({ g: v })
  }

  setB = (v) => {
    this.setState({ b: v })
  }

  render() {
    const style = {
      backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`
    }

    return (
      <li className="swatch" style={style}>
        <div className="swatch-controls">
          <div>rgb(</div>
          <Channel value={this.state.r} handleValueChange={this.setR} />
          <Channel value={this.state.g} handleValueChange={this.setG}  />
          <Channel value={this.state.b} handleValueChange={this.setB}  />
          <div>);</div>
        </div>
        <button className="swatch-cta" onClick={this.props.onRemove}>Remove</button>
      </li>
    )
  }
}

export default Swatch;
