import React from 'react'
import { useState } from 'react'
import s from './Geolocation.module.sass'
import { setCity } from './../../redux/reducers/headerReducer'
import { useDispatch } from 'react-redux'
import geo_icon from './../../../assets/img/geo_icon.png'

export const Geolocation = props => {

    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(true)
    const [citiesOpen, setCitiesOpen] = useState(false)

    const setCurrentCity = el => {
        dispatch(setCity(el))
        setModalOpen(false)
        setCitiesOpen(false)
    }

    return (
        <div className={s.container}>
            <div className={s.geoBlock}>
                <img src={geo_icon} alt="Geolocation icon"/>
                <span onClick={() => { setCitiesOpen(true); setModalOpen(false) }} className={s.currentCity}>
                    {/* Если пользователь сразу же кликнул по выбору города, закрываем модалку с вопросом и открываем список */}
                    {props.currentCity}
                </span>
            </div>
            <div className={s.modals}>
            {
                modalOpen && (
                <div className={s.modal}>
                    <span>Ваш город - {props.currentCity}?</span>
                    <div className={s.modalButtons}>
                        <button onClick={() => setModalOpen(false)} className={s.yesButton}>Да</button>
                        <button onClick={() => { setCitiesOpen(true); setModalOpen(false)}} className={s.changeButton}> 
                        {/* Если неправильно определен город - закрываем модалку с вопросом об определении и открываем список */}
                        Сменить город
                        </button>
                    </div>
                </div>)
            }
                
            {
                citiesOpen && (
                    <div className={s.cityModal}>
                    {
                        props.cities.map((el, i) => {
                            return <div className={s.city}onClick={() => setCurrentCity(el)} key={i}> {el} </div>
                        })
                    }
                </div>)
            }
                
            </div>
        </div>
    )
}