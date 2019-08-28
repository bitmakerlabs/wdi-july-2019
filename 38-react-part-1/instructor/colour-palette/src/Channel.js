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

const Channel = ({value}) => {
  
  const updateValue = (newValue) => {
    console.log(`New Value: ${newValue}`)
  }

  return (
    <div className="channel">
      <button type="button" className="btn up" onClick={ () => { updateValue(1) } }>+</button>
      <input type="text" className="txt" value={value} onChange={ (event) => { updateValue(event.target.value) } } />
      <button type="button" className="btn down" onClick={ () => { updateValue(-1) } }>-</button>
    </div>
  )
}

export default Channel;
