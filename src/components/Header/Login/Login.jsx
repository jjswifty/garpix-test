import React from 'react'
import s from './Login.module.sass'
import { login, unlogin } from './../../redux/reducers/headerReducer'
import { useDispatch } from 'react-redux'

export const Login = props => {

    const dispatch = useDispatch()

    return (
        props.login ?
        <button onClick={() => dispatch(unlogin())}>Выйти</button> 
        : <button onClick={() => dispatch(login())}>Войти</button>
    )
}