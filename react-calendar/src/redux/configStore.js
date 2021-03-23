import { createStore, applyMiddleware, combineReducers } from 'redux';
import rank from './modules/rank';

import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

//export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ rank });

const store = createStore(rootReducer, enhancer);

export default store;
