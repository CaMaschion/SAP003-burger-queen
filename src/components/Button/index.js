import React from 'react'

const Button = (props) => {
    return (
        <div>

            <button
                onClick={props.handleClick}
                type='button'
                style={{
                    
                    backgroundColor: '#FF3127',
                    color: 'white',
                    fontSize: '20pt',
                    cursor: 'pointer',
                    width: '550px',
                    padding: '15px',
                    marginTop: '40px',
                    marginBottom: '40px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    borderRadius: '10px'

                }}

                className={props.button}>{props.text}</button>

        </div>
    )
}
export default Button

