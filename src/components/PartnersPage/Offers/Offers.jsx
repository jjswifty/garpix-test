import React, { useState } from 'react'
import { OfferCard } from './OfferCard/OfferCard'
import s from './Offers.module.sass'
import { offerImages, offerMiniatures } from './offersImages.js' 

export const Offers = props => {

    const [isHiddenOffers, setOffersVisibility] = useState(true)
    const hiddenOffers = []
    
    const cards = [
        ...props.offers.map((e, i) => (   
            <OfferCard 
                key={i}
                randomNumForImg={props.randomNumForImg}
                offerImages={offerImages}
                offerMiniatures={offerMiniatures}
                i={i}
                e={e}
            />    
            )
        )
    ]
    return (
        <div className={s.container}>
            <h2>3 предложения в категории «Электроника и бытовая техника»</h2>
            <div className={s.offersList}>
                {
                    cards.filter((e, i) => {
                        if (i < 3) return e
                        else hiddenOffers.push(e)
                    })
                }

                { !isHiddenOffers && hiddenOffers }
            </div>
            <button onClick={() => setOffersVisibility(!isHiddenOffers)}>
                {
                    `Еще ${hiddenOffers.length} предложения`
                }
            </button>
        </div>
    )
}