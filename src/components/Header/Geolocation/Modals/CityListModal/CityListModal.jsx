import React from 'react'
import s from './CityListModal.module.sass'

export const CityListModal = props => {


    return (
        <div className={s.cityModal}>
            {
                props.cities.map((el, i) => {
                    if (el !== props.currentCity) return (
                        <div className={s.cityBox} key={i}>
                            <input type="button"
                                className={s.city}
                                onClick={() => props.setCurrentCity(el)} key={i}
                                value={el} 
                                onBlur={() => { props.setCitiesOpen(false) }}
                            /> 
                        </div>
                    )
                    else return null
                })
            }
        </div>
    )
}
