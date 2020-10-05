import React, { useState } from 'react'
import { OfferCard } from './OfferCard/OfferCard'
import s from './Offers.module.sass'
import { offerImages, offerMiniatures } from './offersImages.js' 

export const Offers = props => {

    const [isHiddenOffers, setOffersVisibility] = useState(true)
    const hiddenOffers = []
    
    const cards = props.offers.map((e, i) => {
        const card = <OfferCard 
            key={i} i={i} e={e}
            randomNumForImg={props.randomNumForImg}
            offerImages={offerImages}
            offerMiniatures={offerMiniatures} />    
        if (i < 3) return card
        else { hiddenOffers.push(card); return null }
    })

    return (
        <div className={s.container}>
            <h2>3 предложения в категории «Электроника и бытовая техника»</h2>
            <div className={s.offersList}>
                { cards }
                { !isHiddenOffers && hiddenOffers }
            </div>
            <button onClick={() => setOffersVisibility(!isHiddenOffers)}>
                { isHiddenOffers ? `Еще ${hiddenOffers.length} предложения` : 'Закрыть' }
            </button>
        </div>
    )
}