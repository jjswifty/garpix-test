import React from 'react'
import s from './Header.module.sass'
import { Navigation } from "./Navigation/Navigation";
import { useSelector} from 'react-redux'
import { Login } from './Login/Login';
import { Geolocation } from './Geolocation/Geolocation'
import { Search } from './Search/Search'
import spasibo_logo from './../../assets/img/spasibo_logo.png'

export const Header = props => {

    const state = useSelector(state => state.headerReducer)

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src={spasibo_logo} alt="spasibo logo"></img>
            </div>
            <Navigation links={state.links}/>
            <div className={s.container}>
                <Geolocation 
                    currentCity={state.currentCity}
                    cities={state.cities}
                />
                <Search />
                {
                    state.isLogin ? 
                    <Login login={true} /> 
                    : <Login login={false} />
                }
            </div>
            
        </div>
    )
}