import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import calcularReducer from './Calcular/calcular.reducer';

const rootReducer = combineReducers({
  calcular: calcularReducer,
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
