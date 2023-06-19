import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const pbSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    applyFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    [fetchContacts.rejected]: state => {
      state.contacts.isLoading = false;
    },
    [addContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.items.push(action.payload);
      state.contacts.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.contacts.isLoading = false;
    },
  },
});

export const { applyFilter } = pbSlice.actions;

export const contactsReducer = pbSlice.reducer;
