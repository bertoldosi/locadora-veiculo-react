import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);

export const store = createStore(persistedReducer);
export const persisetdStore = persistStore(store);
