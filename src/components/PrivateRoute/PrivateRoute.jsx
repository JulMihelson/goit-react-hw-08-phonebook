import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};
export default PrivateRoute;
