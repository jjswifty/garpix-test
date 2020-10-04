import React from 'react'
import s from './Header.module.sass'
import { Navigation } from "./Navigation/Navigation";
import { useSelector} from 'react-redux'
import { Login } from './Login/Login';
import { Geolocation } from './Geolocation/Geolocation'
import { Search } from './Search/Search'
import spasibo_logo from './../../assets/img/spasibo_logo.png'
import { NavigationMobile } from './Navigation/NavigationMobile/NavigationMobile';

export const Header = props => {

    const state = useSelector(state => state.headerReducer)

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logo}>
                    <img src={spasibo_logo} alt="spasibo logo"></img>
                </div>
                <Navigation className={s.nav} links={state.links} />
                
                <div className={s.actionsContainer}>
                    <Geolocation 
                        currentCity={state.currentCity}
                        cities={state.cities}
                    />
                    <div className={s.searchAndLogin}>
                        <Search />
                        {
                            state.isLogin ? 
                            <Login login={true} /> 
                            : <Login login={false} />
                        }
                    </div>
                    
                </div>
            </div>
            <NavigationMobile className={s.navMobile} 
                isMobileMenuOpen={state.isMobileMenuOpen}
                links={state.links} />
            
        </div>
    )
}