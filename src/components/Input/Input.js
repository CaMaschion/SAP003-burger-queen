import React from 'react';
import './InputStyle.css';


const Input = (props) => {
  return (
    <div className="formContainer">
      <label>{props.title}</label>
      <input type={props.type} value={props.val} onChange={props.handleChange}
        style={{ display: 'block' }} />
    </div>

  )
}

export default Input;