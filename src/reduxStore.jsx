import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import transactions from './Stats/reducer';

const mainReducer = combineReducers({ transactions });
export default createStore(mainReducer, applyMiddleware(thunk));
