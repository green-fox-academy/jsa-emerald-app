import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import transactions from './Stats/reducer';
import user from './Personal/userReducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  transactions,
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
