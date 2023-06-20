import React, { useEffect } from 'react';
import Phonebook from './Phonebook';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/authSelector';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getCurrentUser } from 'redux/auth/authOperations';
import { logOut } from 'redux/auth/authOperations';

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      dispatch(getCurrentUser());
    }
  }, [isAuth, dispatch]);
  const handleLogOut = () => {
    dispatch(logOut());
  };

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
          <div>
            <p>mango@mail.com</p>
            <button onClick={handleLogOut} type="button">
              Logout
            </button>
          </div>
        ) : (
          <nav>
            <Link to={'/contacts'}>Contacts</Link>
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
