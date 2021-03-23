import { createStore, applyMiddleware, combineReducers } from 'redux';
import schedule from './modules/schedule';
//import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ schedule });

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
