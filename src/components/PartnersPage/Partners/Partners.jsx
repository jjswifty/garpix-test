import React from 'react'
import s from './Partners.module.sass'
import partnersImages from './partnersImages.js'

export const Partners = props => (
    <div>
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
)
