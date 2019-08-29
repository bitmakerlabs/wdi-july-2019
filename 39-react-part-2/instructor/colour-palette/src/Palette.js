import React from 'react';
import Swatch from './Swatch';
import Form from './Form';

const Palette = () => {
  const initialSwatches = [
    { red: 255, green: 0, blue: 0 },
    { red: 0, green: 255, blue: 0 },
    { red: 0, green: 0, blue: 255 },
  ]

  const addSwatch = (s) => {
    console.log(`Adding a swatch`, s);
    initialSwatches.push(s)

    console.log(initialSwatches)
  }

  const swatchElements = initialSwatches.map(
    (s, i) => <Swatch key={i} {...s} />
  )

  return (
    <>
      <ul className="palette">
        { swatchElements }
      </ul>
      <Form onSubmit={ addSwatch }/>
    </>
  );
};

export default Palette;
