import React, { Component } from 'react';
import Swatch from './Swatch';
import Form from './Form';

class Palette extends Component {

  initialSwatches = [
    { red: 255, green: 0, blue: 0 },
    { red: 0, green: 255, blue: 0 },
    { red: 0, green: 0, blue: 255 },
  ]

  state = {
    swatches: this.initialSwatches
  }

  addSwatch = (s) => {
    this.setState(
      // (prevState) => {
      //   const newSwatches = [...prevState.swatches, s]
      //   const newState = { swatches: newSwatches }
      //   return newState
      // }
      // ---- same as ----
      (prevState) => ({ swatches: [...prevState.swatches, s] })
    )
  }

  render() {
    const swatchElements = this.state.swatches.map(
      (s, i) => <Swatch key={i} {...s} />
    )

    return (
      <>
        <ul className="palette">
          { swatchElements }
        </ul>
        <Form onSubmit={ this.addSwatch }/>
      </>
    );
  }
};

export default Palette;
