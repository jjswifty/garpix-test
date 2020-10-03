import React from 'react'
import { useState } from 'react'
import s from './Search.module.sass'
import { Modal } from './Modal/Modal'

export const Search = props => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const onModalClick = () => {
        setIsModalOpen(true)
    }

    const onInputBlur = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={ s.container }>
            <div onClick={ onModalClick } className={ s.iconBlock }>
                <input type="button" disabled={ isModalOpen }/>
            </div>
            {
                isModalOpen && (
                    <div>
                        <div className={ s.overlay }></div>
                        <div className={ s.modalContentContainer }>
                            <div className={ s.modalContent }>
                                <Modal onInputBlur={ onInputBlur }/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}