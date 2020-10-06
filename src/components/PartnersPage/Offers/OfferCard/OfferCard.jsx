import React from 'react'
import s from './OfferCard.module.sass'

export const OfferCard = props => {
    const i = props.i
    return (
        <div className={s.offerCard}>
            <img className={s.bigPhoto}
                src=
                {
                    (props.offerImages[i] && props.offerImages[i].src) || props.offerImages[props.randomNumForImg].src
                    // Все так же рандом для затычек, проверяем, существует ли картинка, если нет, то кидаем рандомную из трех
                    // Такое вряд ли можно применять в продакшен коде, но здесь лишь ради примера
                    // Вообще здесь какое-то дублирование кода и можно было бы вынести в отдельную функцию проверку
                    // на существование элемента, может так и сделаю потом
                }
                alt="Company logo"
            />
            <div className={s.offerBottom}>
                <img src=
                    {
                        (props.offerMiniatures[i] && props.offerMiniatures[i].src) || props.offerMiniatures[props.randomNumForImg].src
                    } 
                    alt="company miniature" />
                <div>
                    <p className={s.name}>{props.e.name}</p>
                    <p className={s.bonus}>{props.e.bonus}</p>
                </div>
            </div>
        </div>
    )
}