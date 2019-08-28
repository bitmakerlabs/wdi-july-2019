import React from 'react';
import Channel from './Channel';

class Swatch extends React.Component {

  state = {
    r: this.props.red,
    g: this.props.green,
    b: this.props.blue
  }

  render() {
    const style = {
      backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`
    }

    return (
      <li className="swatch" style={style}>
        <div>rgb(</div>
        <Channel value={this.state.r} />
        <Channel value={this.state.g} />
        <Channel value={this.state.b} />
        <div>);</div>
      </li>
    )
  }
}

export default Swatch;
