import React from 'react'
import s from './Advertisement.module.sass'
import { discountForBonuses, bigPercent, profitCoupons, personal } from './adImages.js'

export const Advertisement = props => {

    const imgToDiv = array => array.map((e, i) => <img src={e.src} alt={e.src} key={i} />)

    return (
        <div className={s.container}>
            <div className={s.discountGroup}>
                <div className={s.discountForBonuses}>
                    {imgToDiv(discountForBonuses)}
                </div>
                <div className={s.textWrap}>
                    <div className={s.textWrapLeftMask} />
                    <p>Скидки за бонусы</p>
                    <div className={s.textWrapRightMask} />
                </div>
            </div>
            <div className={s.centerContainer}>
                <div className={s.bigPercentGroup}>
                    <div className={s.bigPercent}>
                        {imgToDiv(bigPercent)}
                    </div>
                    <div className={s.textWrap}>
                        <div className={s.textWrapLeftMask} />
                        <p>Большой % начисления</p>
                        <div className={s.textWrapRightMask} />
                    </div>
                </div>
                <div className={s.profitCouponsGroup}>
                    <div className={s.profitCoupons}>
                        {imgToDiv(profitCoupons)}
                    </div>
                    <div className={s.textWrap}>
                        <div className={s.textWrapLeftMask} />
                        <p>Выгодные купоны</p>
                        <div className={s.textWrapRightMask} />
                    </div>
                </div>
            </div>
            <div className={s.personalGroup}>
                <div className={s.personal}>
                    {imgToDiv(personal)}
                </div>
                <div className={s.textWrap}>
                    <div className={s.textWrapLeftMask} />
                    <p>Персональное исходя из трат</p>
                    <div className={s.textWrapRightMask} />
                </div>
            </div>
        </div>
    )
}