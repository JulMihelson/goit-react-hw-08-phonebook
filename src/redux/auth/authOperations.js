import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicAPI } from 'redux/http';
import { privateAPI } from 'redux/http';
import { token } from 'redux/http';
import { selectToken } from './authSelector';

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await publicAPI.post('/users/login', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const registartion = createAsyncThunk(
  'auth/registartion',
  async (body, { rejectWithValue }) => {
    try {
      const response = await publicAPI.post('/users/signup', body);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const tokenValue = selectToken(getState());
      token.set(tokenValue);
      const response = await privateAPI.get('/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);