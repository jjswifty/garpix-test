const TOGGLE_CHARGING = 'TOGGLE_CHARGING'
const TOGGLE_ACCEPTING = 'TOGGLE_ACCEPTING'

let initialState = {

    // Предполагается, что партнеров будем получать с сервера, в примерно таком формате:
    partners: [
        {
            name: 'М.Видео',
            spasiboPercent: '1,5',
            isChargingSpasibo: true, // Выставлено рандомно
            isAcceptingSpasibo: true,
            id: 0
        },

        {
            name: 'Бургер Кинг',
            spasiboPercent: '3',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
            id: 1
        },

        {
            name: 'Холодильник.ру',
            spasiboPercent: '4,5',
            isChargingSpasibo: true,
            isAcceptingSpasibo: false,
            id: 2
        },

        {
            name: 'BORK',
            spasiboPercent: 'От 1,5',
            isChargingSpasibo: true,
            isAcceptingSpasibo: false,
            id: 3
        },

        {
            name: 'Евросеть',
            spasiboPercent: '1,5',
            isChargingSpasibo: true,
            isAcceptingSpasibo: false,
            id: 4
        },

        {
            name: 'Еще партнер',
            spasiboPercent: '1',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
            id: 5
        },

        {
            name: 'Еще один',
            spasiboPercent: '5',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
            id: 6
        },

        {
            name: 'И еще один',
            spasiboPercent: '3',
            isChargingSpasibo: true,
            isAcceptingSpasibo: false,
            id: 7
        },

        {
            name: 'Последний',
            spasiboPercent: '2',
            isChargingSpasibo: true,
            isAcceptingSpasibo: true,
            id: 8
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
            bonus: '20% спасибо за технику Electrolux'
        },

        {
            name: 'Евросеть',
            bonus: '10% спасибо за покупки в черную пятницу'
        },

        {
            name: 'М.Видео',
            bonus: '15% спасибо для студентов'
        },

        {
            name: 'Какая-то компания',
            bonus: '10% спасибо за продукцию'
        },

        {
            name: 'Еще компания партнер',
            bonus: '5% спасибо за все'
        },

        {
            name: 'И еще одна компания',
            bonus: '2% спасибо за что-то'
        },

        {
            name: 'Последняя компания',
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