import React from 'react'

const ButtonRemove = (props) => {
    return (
        <div>

            <button            
                onClick={props.handleClick}
                type='button'
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '15pt',
                    cursor: 'pointer',
                    width: '30%',
                    padding: '15px',
                    marginTop: '40px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '10px'
                }}

                className={props.button}>{props.text}</button>

        </div>
    )
}
export default ButtonRemove

