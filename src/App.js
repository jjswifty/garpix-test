import React from 'react'
import s from'./App.module.sass'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Provider } from 'react-redux'
import { store } from './components/redux/store'
import { PartnersPage } from './components/PartnersPage/PartnersPage'
import { Footer } from './components/Footer/Footer'
import { NotFound } from './components/NotFound/NotFound'
import { PromoPage } from './components/PromoPage/PromoPage'

export const App = () => {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                <Header />
                <div className={s.appWrapper}>
                    <div className={s.appWrapperContent}>
                    <Switch>
                        <Route exact path='/Партнеры' render={() => <PartnersPage />} />
                        <Route exact path='/promo' render={() => <PromoPage />}  />
                        <Route path="/404" render={() => <NotFound />} />
                        <Redirect to="/404" />
                    </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}


