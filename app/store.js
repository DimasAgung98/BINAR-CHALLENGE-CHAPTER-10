// Import Redux
import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice'
// Import redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authenticationReducer)

const store = configureStore({
  reducer: {
    authentication : persistedAuthReducer
  },
});

const persistor = persistStore(store)

export { store, persistor };
