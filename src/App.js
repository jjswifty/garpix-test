import React from 'react'
import s from'./App.module.sass'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { PartnersPage } from './components/PartnersPage/PartnersPage'
import { Footer } from './components/Footer/Footer'

export const App = () => {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                <Header />
                <div className={s.appWrapper}>
                    <div className={s.appWrapperContent}>
                        <Route path="/Партнеры" render={() => <PartnersPage />}/>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}


