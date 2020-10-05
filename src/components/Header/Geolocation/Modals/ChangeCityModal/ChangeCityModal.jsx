import React from 'react'
import s from './ChangeCityModal.module.sass'

export const ChangeCityModal = props => {
    return (
        <div className={s.modal}>
            <span>Ваш город - {props.currentCity}?</span>
            <div className={s.modalButtons}>
                <button onClick={() => props.setModalOpen(false)} className={s.yesButton}>Да</button>
                <button onClick={() => { props.setCitiesOpen(true); props.setModalOpen(false) }} className={s.changeButton}>
                    {/* Если неправильно определен город - закрываем модалку с вопросом об определении и открываем список */}
                        Сменить город
                </button>
            </div>
        </div>
    )
}