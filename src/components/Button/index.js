import React from 'react'

// const Button = ({onClick, text}) =>  <button onClick={onClick} className="button">{text}</button> 
const Button = (props) =>  <button onClick={props.handleClick} className="button">{props.text}</button> 


export default Button

