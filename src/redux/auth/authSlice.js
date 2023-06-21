import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, login, registartion } from './authOperations';
import { logOut } from './authOperations';

const initialState = {
  token: null,
  isLoading: false,
  isError: false,
  isAuth: false,
  user: null,
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
        state.user = payload.user;
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
        state.user = payload.user;
      })
      .addCase(registartion.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
      })
      .addCase(getCurrentUser.rejected, () => initialState)
      .addCase(logOut.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
