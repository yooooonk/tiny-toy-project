import { createStore, combineReducers } from 'redux';
import quiz from './modules/quiz';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReducer = combineReducers({ quiz });

const store = createStore(rootReducer);

export default store;
