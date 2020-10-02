import React from 'react'
import s from './Header.module.sass'
import { Navigation } from "./Navigation/Navigation";

export const Header = props => {
    
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src="./../../assets/img/spasibo_logo.png" alt="Sber logo"></img>
            </div>
            <Navigation />
            <div className={s.container}>
                <Geolocation />
                <SearchModal />
                <Login />
            </div>
        </div>
    )
}