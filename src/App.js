import React from 'react'
import s from'./App.sass'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { PartnersPage } from './components/PartnersPage/PartnersPage'

export const App = () => {

    return (
        <Provider store={store}> 
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <Header />
                    <div className={s.appWrapperContent}>

                        <Route path="/partners" render={() => <PartnersPage />}/>

                    </div>
                </div>
                
            </BrowserRouter>
        </Provider>
    );
}


