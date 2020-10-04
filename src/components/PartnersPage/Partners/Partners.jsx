import React, { useState } from 'react'
import s from './Partners.module.sass'
import { PartnersCards } from './PartnersCards/PartnersCards'


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
            <div>
                <PartnersCards partners={
                    isPayingSpasibo ? props.partners.filter(e => e.isChargingSpasibo) 
                    : props.partners.filter(e => e.isAcceptingSpasibo)
                }/>
            </div>
        </div>
    )
}
