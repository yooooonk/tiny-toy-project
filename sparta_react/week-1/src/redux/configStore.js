import {
  createStore,
  combineRedcers,
  applyMiddleware,
  combineReducers
} from 'redux';
import bucket from './modules/bucket';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
export const history = createBrowserHistory();

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer, enhancer);

export default store;
