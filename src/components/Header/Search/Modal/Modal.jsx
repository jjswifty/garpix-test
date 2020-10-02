import React, { useEffect, useRef } from 'react'

export const Modal = props => {

    let textInput = useRef(null)

    useEffect(() => {
        textInput.current.focus()
    })

    return (
        <input ref={textInput} 
        onBlur={props.onInputBlur}/>
    )
}