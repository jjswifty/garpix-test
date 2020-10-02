import { createStore, combineReducers } from "redux";
import { partnersReducer } from './reducers/partnersReducer'

const reducers = combineReducers({
    partnersReducer
})

export const store = createStore(reducers);

window.store = store;