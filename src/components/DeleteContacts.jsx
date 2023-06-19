import React from 'react';
import { deleteContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

const DeleteContacts = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <span>
        {name}: {number}
      </span>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </li>
  );
};

export default DeleteContacts;
