import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateAPI } from './http';

axios.defaults.baseURL = 'https://648c8e048620b8bae7ed12e5.mockapi.io';

export const fetchContacts = createAsyncThunk('get', async () => {
  const response = await privateAPI.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk(
  createAsyncThunk('add', async newContact => {
    const response = await privateAPI.post('/contacts'.newContact);
    return response;
  })
);

export const deleteContact = createAsyncThunk(
  createAsyncThunk('delete', async contactId => {
    const response = await privateAPI.delete('/contacts', contactId);
    return response;
  })
);
