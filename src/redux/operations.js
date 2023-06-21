import { createAsyncThunk } from '@reduxjs/toolkit';
import { commonAPI } from './http';

export const fetchContacts = createAsyncThunk('get', async () => {
  const response = await commonAPI.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('add', async newContact => {
  const response = await commonAPI.post('/contacts', newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('delete', async contactId => {
  const response = await commonAPI.delete('/contacts/' + contactId);
  return response.data;
});
