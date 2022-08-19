// Import Redux
import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from '../features/authentication/authenticationSlice';
import gameHistoryReducer from '../features/gameHistory/gameHistorySlice';
// Import redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authenticationReducer)
const persistedGameHistoryReducer = persistReducer(persistConfig, gameHistoryReducer)

const store = configureStore({
  reducer: {
    authentication: persistedAuthReducer,
    gameHistory: persistedGameHistoryReducer
  },
});

const persistor = persistStore(store)

export { store, persistor };
