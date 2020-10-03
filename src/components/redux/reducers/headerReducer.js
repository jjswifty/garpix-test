const LOGIN = 'LOGIN'
const UNLOGIN = 'UNLOGIN' // Можно было сделать через отрицание, но мне кажется так безопаснее
const SET_CITY = 'SET_CITY'

let initialState = {
    cities: ['Санкт-Петербург', 'Иваново', 'Москва'], // Хардкод
    links: ['Купоны и сертификаты', 'Впечатления', 'Авиабилеты', 'Ж/д билеты', 
        'Отели', 'Каршеринг', 'Театры', 'Страхование', 'Как подключиться', 'Партнеры'],
    isLogin: false,
    currentCity: 'Санкт-Петербург',
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

        default:
            return state
    }
    
}

export const setCity = city => ({ type: SET_CITY, city }) 
export const login = () => ({ type: LOGIN })
export const unlogin = () => ({ type: UNLOGIN })