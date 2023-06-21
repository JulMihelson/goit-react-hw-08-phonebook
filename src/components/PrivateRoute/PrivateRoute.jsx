import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to={'/login'} />;
};
export default PrivateRoute;
