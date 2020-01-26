import React from 'react';
import './InputStyle.css';


const Input = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input type={props.type} value={props.val} onChange={props.handleChange}/>
    </div>

  )
}

export default Input;