const LOGIN = 'LOGIN'
const UNLOGIN = 'UNLOGIN' // Можно было сделать через отрицание, но мне кажется так безопаснее
const SET_CITY = 'SET_CITY'
const TOGGLE_MOBILE_OPEN = 'TOGGLE_MOBILE_OPEN'
const TOGGLE_CITY_SELECTED = 'TOGGLE_CITY_SELECTED'

let initialState = {
    cities: ['Санкт-Петербург', 'Иваново', 'Москва'], // Хардкод
    links: ['Купоны и сертификаты', 'Впечатления', 'Авиабилеты', 'Ж/д билеты', 
        'Отели', 'Каршеринг', 'Театры', 'Страхование', 'Как подключиться', 'Партнеры'],
    isLogin: false,
    currentCity: 'Санкт-Петербург',
    isMobileMenuOpen: false,
    isCitySelected: false,
}

export const headerReducer = (state = initialState, action) => {

    switch (action.type) {

        case (LOGIN): {
            return {
                ...state,
                isLogin: true,
            }
        }

        case (UNLOGIN): {
            return {
                ...state,
                isLogin: false
            }
        }

        case (SET_CITY): {
            return {
                ...state,
                currentCity: action.city
            }
        }

        case (TOGGLE_MOBILE_OPEN): {
            return {
                ...state,
                isMobileMenuOpen: !state.isMobileMenuOpen
            }
        }

        case (TOGGLE_CITY_SELECTED): {
            return {
                ...state,
                isCitySelected: !state.isCitySelected
            }
        }

        default:
            return state
    }
    
}

export const setCity = city => ({ type: SET_CITY, city }) 
export const login = () => ({ type: LOGIN })
export const unlogin = () => ({ type: UNLOGIN })
export const toggleMobileOpen = () => ({type: TOGGLE_MOBILE_OPEN})
export const toggleCitySelected = () => ({type: TOGGLE_CITY_SELECTED})