import { createStore, combineRedcers, combineReducers } from 'redux';
import bucket from './modules/bucket';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer);

export default store;
