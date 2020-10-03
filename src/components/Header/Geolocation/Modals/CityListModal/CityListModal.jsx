import React, { useEffect, useRef } from 'react'
import s from './CityListModal.module.sass'

export const CityListModal = props => {


    return (
        <div className={s.cityModal}>
            {
                props.cities.map((el, i) => {
                    if (el !== props.currentCity) return (
                    <input type="button"
                      
                        className={s.city}
                        onClick={() => props.setCurrentCity(el)} key={i}
                        value={el} 
                        onBlur={() => { props.setCitiesOpen(false) }}
                    /> )
                    else return null
                })
            }
        </div>
    )
}
