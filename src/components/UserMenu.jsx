import React from 'react';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/authOperations';
import { logOut } from 'redux/auth/authOperations';
import { token } from 'redux/http';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      dispatch(getCurrentUser());
    }
  }, [dispatch]);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
