import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { carListReducer } from './carScreen/reducers'

const rootReducer = () => combineReducers({
    carList: carListReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))