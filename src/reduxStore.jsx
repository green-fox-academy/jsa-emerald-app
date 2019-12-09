import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Transactions from './Stats/reducer';

const mainReducer = combineReducers({
  Transactions,
});
export default createStore(mainReducer, applyMiddleware(thunk));
