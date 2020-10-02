import React from 'react'
import { Navigation } from '../Header/Navigation/Navigation'
import s from './Footer.module.sass'

export const Footer = props => {

    return (
        <div className={s.container}>
            <div>
                <div>
                    <span>900</span>
                    <p>По России бесплатно</p>
                </div>
                <div>
                    <img src="" alt="Sber logo"/>
                    <p>© 1997—2019 ПАО Сбербанк.</p>
                </div>
            </div>
            <div>
                
                <Navigation />
                
                <div>
                    <div>
                        гугл аппстор
                    </div>
                    <div>
                        соцсети
                    </div>
                </div>
                <div>
                    <p>Политика АО «ЦПЛ» в отношении обработки персональных данных и Согласие на обработку данных участника Программы «Спасибо от Сбербанка»</p>
                </div>
            </div>
        </div>
    )
}