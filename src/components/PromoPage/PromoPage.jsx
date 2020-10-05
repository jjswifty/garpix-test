import React from 'react'
import { PromoAbout } from './PromoAbout/PromoAbout'
import { PromoContacts } from './PromoContacts/PromoContacts'
import s from './PromoPage.module.sass'

export const PromoPage = props => {
    return (
        <div className={s.container}>
            <PromoAbout />
            <PromoContacts />
        </div>
    )
}