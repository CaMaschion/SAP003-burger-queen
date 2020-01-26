import React from 'react';
import './ButtonMenuStyle.css';

const ButtonMenu = (props) => {
    return (
        <>
            <button 
                className="buttonMenu"
                onClick={props.handleClick}
                type='button'
                text={props.button}>
                {props.text}
            </button>
        </>
    )
}
export default ButtonMenu

