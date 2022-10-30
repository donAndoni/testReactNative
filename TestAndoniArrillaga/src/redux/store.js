import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import lastApiCall from './reducer';

const rootReducer = combineReducers({lastApiCall});

export const Store = createStore(rootReducer, applyMiddleware(thunk));