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
        <div>
            <img src={geo_icon} alt="Geolocation icon"/>
            <span onClick={() => { setCitiesOpen(true); setModalOpen(false) }}>
                {/* Если пользователь сразу же кликнул по выбору города, закрываем модалку с вопросом и открываем список */}
                {props.currentCity}
            </span>
            <div>
            {
                modalOpen && (
                <div className={s.modal}>
                    <span>Ваш город - {props.currentCity}?</span>
                    <button onClick={() => setModalOpen(false)}>Да</button>
                    <button onClick={() => { setCitiesOpen(true); setModalOpen(false)}}> 
                    {/* Если неправильно определен город - закрываем модалку с вопросом об определении и открываем список */}
                    Сменить город
                    </button>
                </div>)
            }
            {
                citiesOpen && (
                props.cities.map((el, i) => {
                    return (
                        <div onClick={() => setCurrentCity(el)} key={i}> {el} </div>
                    )
                }))
            }
            </div>
        </div>
    )
}