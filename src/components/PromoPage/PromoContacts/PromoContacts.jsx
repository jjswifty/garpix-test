import React, { useState } from 'react'
import s from './PromoContacts.module.sass'
import Lubyanka from './../../../assets/img/promo/Lubyanka.png'
import Mayakovskaya from './../../../assets/img/promo/Mayakovskaya.png'
import appleLocation from './../../../assets/img/promo/apple_location.png'
import apple from './../../../assets/img/promo/apple.png'
import map from './../../../assets/img/promo/map.png'

export const PromoContacts = props => {

    // Ну а так должно прийти по пропсам с серва
    const cards = new Array(3)
    cards.fill(
        {
            logo: appleLocation,
            location: {
                city: 'Москва',
                street: 'Большая Татарская',
                apartments: '21',
            },
            metro: [
                {
                    name: 'Маяковская',
                    img: Mayakovskaya
                },
                {
                    name: 'Лубянка',
                    img: Lubyanka
                }
            ],
            phone: '+7 495 220-30-44',
            workTime: 'Ежедневно с 09:00 до 21:00',
            site: 'apple.com'
        }
    )
    // eslint-disable-next-line
    const [contactsData, setContactsData] = useState(cards)

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <img src={apple} alt="Apple big logo"/>
                <h3>Apple music</h3>
            </div>
            <div className={s.cards}>
                {
                    contactsData.map((e, i) => (
                        <div className={s.card} key={i}>
                            <div className={s.cardImg}>
                                <img src={e.logo} alt="Apple miniature" />
                            </div>
                            <div className={s.cardMain}>
                                <p>{e.location.city}, ул. {e.location.street}, {e.location.apartments}</p>
                                <div className={s.cardMetro}>
                                    {
                                        e.metro.map((e, i) => (
                                            <div key={i}>
                                                <img src={e.img} alt={e.name} />
                                                <p>{e.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                <p>{e.phone}</p>
                                <p>{e.workTime}</p>
                                <a href={`http://${e.site}`} target="_blank" rel="noopener noreferrer">{e.site}</a>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
            <div className={s.map}>
                <img src={map} alt="apple location"/>
            </div>
        </div>
    )
}