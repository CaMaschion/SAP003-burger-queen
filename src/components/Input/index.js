import React, { useState } from 'react'

const Input = ({placeholder}) => {
    const [inputValue, setinputValue] = useState('')
    return (
        <>
        <input placeholder={placeholder}>
        </input>
        </>
    )
}

export default Input 