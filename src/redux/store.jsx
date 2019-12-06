import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import transactions from '../Stats/redux/reducer';

const mainReducer = combineReducers({ reducer, transactions });
export default createStore(mainReducer, applyMiddleware(thunk));
