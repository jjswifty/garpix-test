import React from 'react'
import { NavLink } from 'react-router-dom'
import { PromoAbout } from './PromoAbout/PromoAbout'
import { PromoContacts } from './PromoContacts/PromoContacts'
import s from './PromoPage.module.sass'

export const PromoPage = props => {
    return (
        <div className={s.container}>
            <div className={s.links}> 
                <p><NavLink to='/coupons'>Скидочные купоны</NavLink> • <NavLink to='/fun'>Развлечения</NavLink></p>
            </div>
            <PromoAbout />
            <PromoContacts />
        </div>
    )
}