import React from 'react'
import s from 'Offers.module.sass'

export const Offers = props => {
    return (
        <div>
            <h2>3 предложения в категории «Электроника и бытовая техника»</h2>
            <div className={s.offersList}>
                {
                    props.offers.map((e, i) => (
                        <div key={i} className={s.offerCard}>
                            <img src={e.logo.large} alt="Company logo"/>
                            <div>
                                <img src={e.logo.small} alt="company miniature"/>
                                <div>
                                    <p>{e.name}</p>
                                    <p>{e.bonus}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}