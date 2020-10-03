import React, { useState } from 'react'
import partnersImages from './../partnersImages.js'
import { Card } from './Card/Card.jsx'
import s from './PartnersCards.module.sass'

export const PartnersCards = props => {
    const hiddenPartners = []
    const [isOtherPartnersVisible, setCategoryVisibility] = useState(false)

    return (
        <div>
            <div className={s.container}>
                {
                    props.partners.map((e, i) => {
                        if (i > 4) {
                            hiddenPartners.push(e)
                            return null
                        }
                        return (
                            <Card key={i} e={e}
                                partnerImage={partnersImages[e.id] || partnersImages[partnersImages.length - 1] }
                            />
                        )
                    }
                    )
                }
                {
                    isOtherPartnersVisible && hiddenPartners.map((e, i) => (
                        <Card key={i} e={e}
                            partnerImage={partnersImages[e.id] || partnersImages[partnersImages.length - 1]}
                        />
                        )
                    )
                }
            </div>
            <div>
            {
            hiddenPartners.length > 0 && <button
                    onClick={() => { setCategoryVisibility(!isOtherPartnersVisible) }}>
                    {
                         isOtherPartnersVisible ? 'Закрыть' : `Ещё ${hiddenPartners.length} партнёра`
                    }
                </button>
            }   
            </div>
            
        </div>

    )
}