import React from 'react'
import { useSelector } from 'react-redux'
import { Advertisement } from './Advertisement/Advertisement'
import { Categories } from './Categories/Categories'
import { Offers } from './Offers/Offers'
import { Partners } from './Partners/Partners'

export const PartnersPage = props => {

    const state = useSelector(state => state.partnersReducer)

    return (
        <div>
            <h1>Партнеры и предложения</h1>
            <Categories categories={state.categories}/>
            <Partners partners={state.partners}/>
            <Offers offers={state.offers} />
            <Advertisement />
        </div>
    )
}