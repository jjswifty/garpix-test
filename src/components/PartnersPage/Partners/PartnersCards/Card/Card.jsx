import React from 'react'
import s from './Card.module.sass'

export const Card = props => (
    <div className={s.card}>
        <div>
            <h3>{props.e.spasiboPercent}%</h3>
            <p>Спасибо от суммы покупки</p>
        </div>
        <img alt={(props.partnerImage && props.partnerImage.name) || 'Partner'}
            src={props.partnerImage.src} />
        {/* затычки просто для показа */}
        <p>{props.e.name}</p>
    </div>
)