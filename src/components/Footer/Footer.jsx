import React from 'react'
import { useSelector } from 'react-redux'
import { Navigation } from '../Header/Navigation/Navigation'
import s from './Footer.module.sass'
import sberlogo from './../../assets/img/footer/sberlogo.svg'
import googleplay from './../../assets/img/footer/google-play.svg'
import appstore from './../../assets/img/footer/app-store.svg'
import ok from './../../assets/img/footer/ok.svg'
import fb from './../../assets/img/footer/fb.svg'
import vk from './../../assets/img/footer/vk.svg'
import inst from './../../assets/img/footer/inst.svg'


export const Footer = props => {

    const links = useSelector(state => state.headerReducer.links)
    
    return (
        <div className={s.container}>
            <div className={s.containerContent}>
                <div className={s.contactsContainer}>
                    <div className={s.numInfo}>
                        <span>900</span>
                        <p>По России бесплатно</p>
                    </div>
                    <div className={s.logoBox}>
                        <img src={sberlogo} alt="Sber logo"/>
                        <p>© 1997—2019 ПАО Сбербанк.</p>
                    </div>
                </div>
                <div className={s.social}>

                    <Navigation links={ links } />

                    <div className={s.socialLinks}>
                        <div className={s.download}>
                            <img src={googleplay} alt="google play"/>
                            <img src={appstore} alt="app store"/>
                        </div>
                        <div className={s.media}>
                            <img src={ok} alt="OK"/>
                            <img src={fb} alt="Facebook"/>
                            <img src={vk} alt="VKontakte"/>
                            <img src={inst} alt="Instagram"/>
                        </div>
                    </div>
                    <div>
                        <p>Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</p>
                    </div>
                </div>
            </div>
        </div>
    )
}