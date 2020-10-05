import React from 'react'
import { useState } from 'react'
import s from './Geolocation.module.sass'
import { setCity } from './../../redux/reducers/headerReducer'
import { useDispatch, useSelector } from 'react-redux'
import geo_icon from './../../../assets/img/geo_icon.png'
import { ChangeCityModal } from './Modals/ChangeCityModal/ChangeCityModal'
import { CityListModal } from './Modals/CityListModal/CityListModal'

export const Geolocation = props => {

    const dispatch = useDispatch()

    const [modalOpen, setModalOpen] = useState(true)
    const [citiesOpen, setCitiesOpen] = useState(false)

    const isMobileMenuOpen = useSelector(state => state.headerReducer.isMobileMenuOpen)
    const isCitySelected = useSelector(state => state.headerReducer.isCitySelected)
    
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
                (!isCitySelected && modalOpen) && <ChangeCityModal 
                setModalOpen={setModalOpen} 
                setCitiesOpen={setCitiesOpen}
                currentCity={props.currentCity}
                isMobileMenuOpen={isMobileMenuOpen}
                />
            }
                
            {
                citiesOpen && (
                    <CityListModal cities={props.cities} 
                    currentCity={props.currentCity} 
                    setCurrentCity={setCurrentCity} 
                    setCitiesOpen={setCitiesOpen}/>
                )
            }
                
            </div>
        </div>
    )
}