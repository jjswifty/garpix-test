import React from 'react'
import s from './Advertisement.module.sass'
import { discountForBonuses, bigPercent, profitCoupons, personal } from './adImages.js'

export const Advertisement = props => {

    const imgToDiv = array => array.map((e, i) => <img src={e.src} alt={e.src} key={i} />)
    
    return (
        <div className={s.container}>
            <div className={s.discountForBonuses}>
                { imgToDiv(discountForBonuses) }
            </div>
            <div className={s.centerContainer}>
                <div className={s.bigPercent}>
                    { imgToDiv(bigPercent) }
                </div>
                <div className={s.profitCoupons}>
                    { imgToDiv(profitCoupons) }
                </div>
            </div>
            <div className={s.personal}>
                { imgToDiv(personal) }
            </div>
        </div>
    )
}