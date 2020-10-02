import React from 'react'
import { NavLink } from "react-router-dom"
import s from './Navigation.module.sass'

export const Navigation = props => {

    const links = ['Купоны и сертификаты', 'Впечатления', 'Авиабилеты', 'Ж/д билеты', 'Отели', 'Каршеринг', 'Театры', 'Страхование', 'Как подключиться', 'Партнеры']

    return (

        <nav className={s.nav}>

            {
                links.map((e, i) => (
                    <div className={s.item}>
                        <NavLink to={e} activeClassName={s.active} key={i}>{e}</NavLink>
                    </div>
                ))
            }
        
        </nav>
    )
}