import React from 'react'
import s from './Categories.module.sass'

export const Categories = props => {
    return (
        <div>
            {
                props.categories.map((e, i) => {
                    return (
                        <div key={i} className={s.categoriesItem}>
                            <p>{e}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}