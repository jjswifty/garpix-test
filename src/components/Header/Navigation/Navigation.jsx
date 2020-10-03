import React from 'react'
import { NavLink } from "react-router-dom"
import s from './Navigation.module.sass'

export const Navigation = props => (
    <nav className={s.nav}>
        {
            props.links.map((e, i) => (
                <div className={s.item} key={i}>
                    <NavLink to={e.split('/').join('')} activeClassName={s.active}> {e} </NavLink> 
                    {/* Пришлось запилить такой фильтр на слэш (он только в Ж/д билеты), 
                    иначе в адресной строке этот слэш считался бы за директорию */}
                </div>
            ))
        }
    </nav>
)
