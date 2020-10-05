import React, { useState } from 'react'
import s from './Categories.module.sass'

export const Categories = props => {

    const hiddenCategories = []
    const [isOtherCategoriesVisible, setCategoryVisibility] = useState(false)

    return (
        <div className={s.content}>
            {
                // Логика такова:
                // Если по счету в переборе мапа индекс больше 8, то мы этот элемент пушим
                // в массив который открывается по нажатию на соответствующую кнопку
                // Если бы элементов было штук 20 и более, 
                // можно было бы в массив спрятанных категорий пушить только 5-6 штук
                // изначально, а по нажатию на показ доп. категорий сразу же добавлять в него снова 5-6 элементов
                props.categories.map((e, i) => {
                    if (i > 8) {
                        hiddenCategories.push(e)
                        return null
                    }
                    return (
                        <div key={i} className={s.categoriesItem}>
                            <button>{ e }</button>
                        </div>
                    )
                })
            }
            {
                isOtherCategoriesVisible && hiddenCategories.map((e, i) => (
                    <div className={s.categoriesItem} key={i}> 
                        <button>{ e }</button> 
                    </div>
                    )
                )
            }
            <div className={s.categoriesItem}>
                <button className={s.btnMore}
                    onClick={ () => { setCategoryVisibility(!isOtherCategoriesVisible) } }> 
                    {
                        isOtherCategoriesVisible ? 'x' : '• • •' // Это символы, отображаться будет везде
                    }
                </button>
            </div> 
        </div>
    )
}