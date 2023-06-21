import React from 'react';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/authSelector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const user = useSelector(selectUser);

  return (
    <div>
      <p>{user?.email}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
