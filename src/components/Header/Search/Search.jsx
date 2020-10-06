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
<<<<<<< HEAD
                    <div className={s.modalContainer}>
=======
                    <div>
>>>>>>> fff08b89a1a6d26a2347c2b8039d12fcaf75bcff
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