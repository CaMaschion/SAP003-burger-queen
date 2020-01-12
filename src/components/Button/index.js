import React from 'react'

const Button = (props) => {
    return (
        <div>

            <button onClick={props.handleClick} type='button' style={{backgroundColor:' #ffde59'}}className={props.button}>{props.text}</button>

        </div>
    )
}
export default Button

