import React from 'react';
import './InputStyle.css';


const Input = (props) => {
  return (
    <>
      <label>{props.title}</label>
      <input type={props.type} value={props.val} onChange={props.handleChange}/>
    </>

  )
}

export default Input;