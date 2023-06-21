import React from 'react';
import Phonebook from './Phonebook';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelector';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import UserMenu from './UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    if (!isAuth) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuth]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <>
        {isAuth ? (
          <UserMenu />
        ) : (
          <nav>
            {/* <Link to={'/contacts'}>Contacts</Link> */}
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<Navigate to={'/contacts'} />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Phonebook />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </>
    </div>
  );
};
