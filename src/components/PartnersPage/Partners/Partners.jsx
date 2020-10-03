import React, { useState } from 'react'
import s from './Partners.module.sass'
import partnersImages from './partnersImages.js'

export const Partners = props => {

    const [isPayingSpasibo, setPayingSpasibo] = useState(true) // Если false - значит принимают

    return (
        <div>
            <div className={s.togglerContainer}>
                <p onClick={() => setPayingSpasibo(true)}
                    className={isPayingSpasibo ? s.green : undefined}    
                >
                    Начисляют спасибо
                </p>
                <input type="checkbox" 
                    className={s.toggleButton} 
                    onChange={() => setPayingSpasibo(!isPayingSpasibo)} 
                    checked={!isPayingSpasibo}   
                />
                <p onClick={() => setPayingSpasibo(false)}
                    className={!isPayingSpasibo ? s.green : undefined}
                >
                    Принимают спасибо
                </p>
            </div>
            <div className={s.cardsContainer}>
                {
                    props.partners.map((e, i) => {
                        return (
                            <div key={i}>
                                <div className={s.spasiboInfo}> 
                                    <h3>{e.spasiboPercent}</h3> 
                                    <p>Спасибо от суммы покупки</p> 
                                </div>
                                <img alt={(partnersImages[i] && partnersImages[i].name) || 'Partner'} 
                                    src={partnersImages[i] ? partnersImages[i].src 
                                    : partnersImages[Math.floor(Math.random() * 2.5)].src}/> 
                                    {/* Сделал такой рандом чтобы затычки были */}
                                <p>{e.name}</p> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
