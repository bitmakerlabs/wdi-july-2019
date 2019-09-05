import React from 'react';

const Form = ({ onSubmit }) => {
  const rRef = React.createRef();
  const gRef = React.createRef();
  const bRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const s = {
      red:   rRef.current.value,
      green: gRef.current.value,
      blue:  bRef.current.value,
    }

    onSubmit(s)
  }

  return (
    <form onSubmit={handleSubmit} >
      <input ref={rRef} type="number" />
      <input ref={gRef} type="number" />
      <input ref={bRef} type="number" />
      <button>Add Colour!</button>
    </form>
  )
}

export default Form;
