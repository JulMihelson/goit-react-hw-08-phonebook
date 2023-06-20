import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateAPI } from './http';

export const fetchContacts = createAsyncThunk('get', async () => {
  const response = await privateAPI.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('add', async newContact => {
  const response = await privateAPI.post('/contacts', newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('delete', async contactId => {
  const response = await privateAPI.delete('/contacts', contactId);
  return response.data;
});
