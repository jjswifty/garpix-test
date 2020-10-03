import { createStore, combineReducers } from "redux";
import { partnersReducer } from './reducers/partnersReducer'
import { headerReducer } from './reducers/headerReducer'

const reducers = combineReducers({
    partnersReducer,
    headerReducer
})

export const store = createStore(reducers);

window.store = store;