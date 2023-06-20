import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const PublicRoute = () => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <Navigate to={'/contacts'} /> : <Outlet />;
};
export default PublicRoute;
