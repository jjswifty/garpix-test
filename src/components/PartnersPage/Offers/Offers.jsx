import React from 'react'
import s from './Offers.module.sass'
import { offerImages, offerMiniatures } from './offersImages.js'

export const Offers = props => {
    return (
        <div>
            <h2>3 предложения в категории «Электроника и бытовая техника»</h2>
            <div className={s.offersList}>
                {
                    props.offers.map((e, i) => {
                        // Для того, чтобы рандомное число было одинаковым для обоих фото, в итоге миниатюра будет для нужного оффера
                        const randomNumForImg = Math.floor(Math.random() * 2.6)

                        return (
                        <div key={i} className={s.offerCard}>
                            <img src = 
                            {
                                (offerImages[i] && offerImages[i].src) || offerImages[randomNumForImg].src
                                // Все так же рандом для затычек, проверяем, существует ли картинка, если нет, то кидаем рандомную из трех
                                // Такое вряд ли можно применять в продакшен коде, но здесь лишь ради примера
                                // Вообще здесь какое-то дублирование кода и можно было бы вынести в отдельную функцию проверку
                                // на существование элемента, может так и сделаю потом
                            }  
                            alt="Company logo"/>
                            <div>
                                <img src =
                                {
                                    (offerMiniatures[i] && offerMiniatures[i].src) || offerMiniatures[randomNumForImg].src
                                } alt="company miniature"/>
                                <div>
                                    <p>{e.name}</p>
                                    <p>{e.bonus}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}