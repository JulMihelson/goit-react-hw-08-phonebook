import { createSlice } from '@reduxjs/toolkit';
import { login, registartion } from './authOperations';

const initialState = {
  token: '',
  isLoading: false,
  isError: false,
  isAuth: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registartion.pending, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registartion.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(registartion.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
