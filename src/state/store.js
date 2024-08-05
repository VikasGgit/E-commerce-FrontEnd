import {legacy_createStore, applyMiddleware, combineReducers} from "redux"
import {thunk} from "redux-thunk"
import { authReducer } from "./Auth/Reducer.js"
import { customerProductReducer } from "./Product/Reducer.js"
import { cartReducer } from "./Cart/Reducer.js"
import { orderReducer } from "./Order/Reducer.js"
import { paymentReducer } from "./Payment/Reducer.js"

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    payment:paymentReducer,
})

const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export {store}