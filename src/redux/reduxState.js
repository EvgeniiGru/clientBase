import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import Clientreduser from "./Client";

let reducers = combineReducers({
    client:Clientreduser
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;