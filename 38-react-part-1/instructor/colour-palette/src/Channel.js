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
  return (
    <div className="channel">
      <button type="button" className="btn up">+</button>
      <input type="text" className="txt" value={value} />
      <button type="button" className="btn down">-</button>
    </div>
  )
}

export default Channel;
