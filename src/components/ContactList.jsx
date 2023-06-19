import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selector';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import DeleteContacts from './DeleteContacts';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {filteredContacts.map(contact => (
          <DeleteContacts
            name={contact.name}
            number={contact.phone}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
