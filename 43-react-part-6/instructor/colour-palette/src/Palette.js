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

  removeSwatch = (index) => {
    this.setState(
      (prevState) => {
        const newSwatches = prevState.swatches.filter(
          (_, i) => i !== index
        )
        return { swatches: newSwatches }
      }
    )
  }

  // Faking a primary key returned by an API
  primary_key = () => {
    return Math.floor(Math.random() * 1000000)
  }

  render() {
    const swatchElements = this.state.swatches.map(
      (s, i) => <Swatch key={ this.primary_key() } {...s} onRemove={ () => { this.removeSwatch(i) } } />
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
