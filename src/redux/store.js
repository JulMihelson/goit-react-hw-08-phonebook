import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/pbSlice';

export const store = configureStore({
  reducer: contactsReducer,
});
