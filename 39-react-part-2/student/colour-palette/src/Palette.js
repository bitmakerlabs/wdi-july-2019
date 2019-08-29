import React from 'react';
import Swatch from './Swatch';

const Palette = () => {
  return (
    <ul className="palette">
      <Swatch red={55} green={90} blue={200} />
      <Swatch red={10} green={190} blue={33} />
      <Swatch red={99} green={4} blue={6} />
    </ul>
  );
};

export default Palette;
