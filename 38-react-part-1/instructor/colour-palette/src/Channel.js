import React from 'react';

// DESTRUCTRUING EXAMPLE
// const props = {
//   "key1": "value1",
//   "key2": "value2"
// }

//const key1 = props.key1
//const key2 = props.key2
// --- or ---
//const {key1, key2, key3, key4} = props

const Channel = ({value, handleValueChange}) => {

  const updateValue = (newValue) => {
    console.log(`Old Value: ${value}`)
    handleValueChange(newValue)
    console.log(`New Value: ${value}`)
  }

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ () => { updateValue(value+1) } }>+</button>
      <input type="text" className="txt" value={value} onChange={ (event) => { updateValue(event.target.value) } } />
      <button type="button" className="btn down" onClick={ () => { updateValue(value-1) } }>-</button>
    </div>
  )
}

export default Channel;
