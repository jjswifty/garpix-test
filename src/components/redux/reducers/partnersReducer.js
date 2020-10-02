const TOGGLE_CHARGING = 'TOGGLE_CHARGING'
const TOGGLE_ACCEPTING = 'TOGGLE_ACCEPTING'

let initialState = {

    // Предполагается, что партнеров будем получать с сервера, в примерно таком формате:
    partners: [
        {
            name: 'М.Видео',
            spasiboPercent: '1,5',
            logo: '', // Ну а здесь будут ссылки, а не локальные лого
            isChargingSpasibo: true, // Выставлено рандомно
            isAcceptingSpasibo: false,
        },

        {
            name: 'Бургер Кинг',
            spasiboPercent: '3',
            logo: '',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
        },

        {
            name: 'Холодильник.ру',
            spasiboPercent: '4,5',
            logo: '',
            isAcceptingSpasibo: true,
            isChargingSpasibo: false,
        },

        {
            name: 'BORK',
            spasiboPercent: 'От 1,5',
            logo: '',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
        },

        {
            name: 'Евросеть',
            spasiboPercent: '1,5',
            logo: '',
            isChargingSpasibo: false,
            isAcceptingSpasibo: true,
        },

        {
            name: 'Еще партнер',
            spasiboPercent: '1',
            logo: '',
            isChargingSpasibo: false,
            isAcceptingSpasibo: true,
        },

        {
            name: 'Еще один',
            spasiboPercent: '5',
            logo: '',
            isChargingSpasibo: false,
            isAcceptingSpasibo: true,
        },

        {
            name: 'И еще один',
            spasiboPercent: '3',
            logo: '',
            isChargingSpasibo: true,
            isAcceptingSpasibo: false,
        },

        {
            name: 'Последний',
            spasiboPercent: '2',
            logo: '',
            isChargingSpasibo: false,
            isAcceptingSpasibo: true,
        }
    ],
    // Флаги начисления и принятия спасибо бонусов
    isChargingSpasibo: true, 
    isAcceptingSpasibo: false, 
    categories: [
        'Все партнеры', 'Популярные', 'Супермаркеты', 'Кафе и рестораны', 'Такси', 
        'Красота', 'Электроника и бытовая техника', 'Зоотовары', 'Кино и театр',
        'Еще категория', 'И еще одна' // <-- добавлены для функционирования раскрытия доп. категорий
    ], // Захардкодено
    offers: [
        {
            name: 'Технопарк',
            logo: {
                large: '',
                small: ''
            },
            bonus: '20% спасибо за технику Electrolux'
        },

        {
            name: 'Евросеть',
            logo: {
                large: '',
                small: ''
            },
            bonus: '10% спасибо за покупки в черную пятницу'
        },

        {
            name: 'М.Видео',
            logo: {
                large: '',
                small: ''
            },
            bonus: '15% спасибо для студентов'
        },

        {
            name: 'Какая-то компания',
            logo: {
                large: '',
                small: ''
            },
            bonus: '10% спасибо за продукцию'
        },

        {
            name: 'Еще компания партнер',
            logo: {
                large: '',
                small: ''
            },
            bonus: '5% спасибо за все'
        },

        {
            name: 'И еще одна компания',
            logo: {
                large: '',
                small: ''
            },
            bonus: '2% спасибо за что-то'
        },

        {
            name: 'Последняя компания',
            logo: {
                large: '',
                small: ''
            },
            bonus: '7% просто потому что "счастливое" число'
        },
        
    ]
}

export const partnersReducer = (state = initialState, action) => {

    switch (action.type) {

        case (TOGGLE_CHARGING): {
            return {
                ...state,
                isChargingSpasibo: !state.isChargingSpasibo
            }
        }

        case (TOGGLE_ACCEPTING): {
            return {
                ...state,
                isAcceptingSpasibo: !state.isAcceptingSpasibo
            }
        }

        default:
            return state
    }
    
}

export const toggleCharging = () => ({type: TOGGLE_CHARGING})
export const toggleAccepting = () => ({type: TOGGLE_ACCEPTING})