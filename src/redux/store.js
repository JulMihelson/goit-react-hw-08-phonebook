import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/pbSlice';
import { authReducer } from './auth/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: { contacts: contactsReducer, auth: authPersistReducer },
});

export const persistor = persistStore(store);
