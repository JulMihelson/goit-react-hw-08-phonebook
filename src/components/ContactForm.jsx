import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from '../redux/operations';
import css from './ContactForm.module.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmitAdd = event => {
    event.preventDefault();
    const alreadyAddedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (alreadyAddedContact) {
      alert(`Contact with name ${name} already exists in the phonebook.`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <div className={css.container}>
      <label className={css.title}>Name</label>
      <form onSubmit={handleOnSubmitAdd}>
        <input
          className={css.input}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={css.title}>Number</label>
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
