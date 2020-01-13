import React from 'react';


const Input = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input type={props.type} value={props.val} onChange={props.handleChange}
        style={{display: 'block'}} />
    </div>

  )
}

export default Input;