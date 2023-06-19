import React from 'react';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';
import ContactForm from './ContactForm';

const Phonebook = () => {
  return (
    <div>
      <ContactForm />
      <FilterContacts />
      <ContactList />
    </div>
  );
};

export default Phonebook;
