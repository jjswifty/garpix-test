import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCitySelected } from '../../../../redux/reducers/headerReducer'
import s from './ChangeCityModal.module.sass'


export const ChangeCityModal = props => {
    const dispatch = useDispatch()
    return (
        <div className={s.modal}>
            <span>Ваш город - {props.currentCity}?</span>
            <div className={s.modalButtons}>
                <button onClick={() => { props.setModalOpen(false); dispatch(toggleCitySelected()) }} className={s.yesButton}>Да</button>
                <button onClick={() => { props.setCitiesOpen(true); props.setModalOpen(false); dispatch(toggleCitySelected())}} className={s.changeButton}>
                    {/* Если неправильно определен город - закрываем модалку с вопросом об определении и открываем список */}
                        Сменить город
                </button>
            </div>
        </div>
    )
}