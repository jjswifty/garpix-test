import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import s from './NavigationMobile.module.sass'
import burger from './../../../../assets/img/burger.svg'
import closeBurger from './../../../../assets/img/close_icon.svg'
import { toggleMobileOpen } from '../../../redux/reducers/headerReducer'

export const NavigationMobile = props => {

    const dispatch = useDispatch()
    const isBurgerOpen = props.isMobileMenuOpen

    document.body.style.overflow = isBurgerOpen ? 'hidden' : 'visible'

    const links = props.links.map((e, i) => (
        <div className={s.item} key={i}>
            <NavLink to={e.split('/').join('')} 
                activeClassName={s.active} 
                onClick={() => dispatch(toggleMobileOpen())}
            > 
                {e} 
            </NavLink> 
        </div>
    ))

    const burgerButton = (
        <div className={s.burger} onClick={() => dispatch(toggleMobileOpen())}>
            {
                <img src={isBurgerOpen ? closeBurger : burger} alt='burger menu'/> 
            }
        </div>
    )

    return (
        isBurgerOpen ? <div className={s.container}>
            {burgerButton}
            
            <nav className={s.navMobile}> { links } </nav>
            
        </div> : burgerButton
    )
}