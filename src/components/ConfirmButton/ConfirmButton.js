import React from 'react';
import './ConfirmButtonStyle.css';

const ConfirmButton = (props) => {
    return (
        <>
            <div>
                <button
                    className='confirm-button'
                    onClick={props.handleClick}
                    type='button'
                    text={props.button}>
                    {props.text}
                </button>
            </div>
        </>
    )
}
export default ConfirmButton
