import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const mainReducer = combineReducers({ reducer });
export default createStore(mainReducer, applyMiddleware(thunk));
