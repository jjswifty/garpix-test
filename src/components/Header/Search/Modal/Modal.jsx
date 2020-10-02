import React, { useEffect, useRef } from 'react'
import s from './Modal.module.sass'

export const Modal = props => {

    let textInput = useRef(null)

    useEffect(() => {
        textInput.current.focus()
    })

    return (
        <div className={s.modal}>
            <input ref={textInput} 
                onBlur={props.onInputBlur}
                className={s.modalInput}
                placeholder='Поиск'
                onKeyDown={(e) => { if (e.key === 'Enter' || 'Escape') props.onInputBlur() }}
            />
        </div>
    )
}