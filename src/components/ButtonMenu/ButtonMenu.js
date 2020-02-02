import React from 'react';
import './ButtonMenuStyle.css';

const ButtonMenu = (props) => {
    return (
        <>
            <div className='button-size'>
                <button
                    className="buttonMenu"
                    onClick={props.handleClick}
                    type='button'
                    text={props.button}>
                    {props.text}
                </button>
            </div>
        </>
    )
}
export default ButtonMenu

