import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import transactions from './Stats/reducer';
import backupState from './Personal/backupReducer';
import restoreState from './Personal/restoreReducer';
import openBanking from './Personal/openBanking/obReducer';
import user from './Personal/userReducer';
import theme from './Common/theme/themeReducer';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['openBanking'],
};

const rootReducer = combineReducers({
  transactions,
  backupState,
  user,
  restoreState,
  openBanking,
  theme,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
