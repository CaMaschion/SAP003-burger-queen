import React from 'react';
import './ButtonRemoveStyle.css';

const ButtonRemove = (props) => {
    return (
        <>
            <button
                className="buttonRemove"
                onClick={props.handleClick}
                type='button'
                text={props.button}>
                {props.text}</button>
        </>
    )
}
export default ButtonRemove

