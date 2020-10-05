import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NotFound.module.sass'

export const NotFound = () => (
    <div className={s.container}>
        { 
            Math.random() > 0.5 ?
            <h1>Упс.. Кажется здесь ничего нет. 
                Может быть открыть страницу "<NavLink to="/Партнеры">Партнёры</NavLink>",
                или же "<NavLink to="/promo">Промо</NavLink>"?
            </h1>
            :
            <h1>Здесь точно что-то будет. Это точно.
                А пока загляните сюда: "<NavLink to="/Партнеры">Партнёры</NavLink>",
                ну или же сюда: "<NavLink to="/promo">Промо</NavLink>".
            </h1>
        }
    </div>
)