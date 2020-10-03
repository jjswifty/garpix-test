import React from 'react'
import partnersImages from './../partnersImages.js'
import { Card } from './Card/Card.jsx'

export const PartnersCards = props => (
    
    props.partners.map((e, i) => (
    <Card key={i} e={e} i={i} 
        partnerImage={partnersImages[i] || partnersImages[i-partnersImages.length]} 
    />)
    )
)