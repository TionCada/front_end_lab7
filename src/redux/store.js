import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./users-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    usersInfo: usersReducer,
    messagesInfo: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;