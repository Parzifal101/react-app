import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { timerReducer } from './timerReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ cash: cashReducer, customers: customerReducer, timer: timerReducer })

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))