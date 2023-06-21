import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={'/contacts'} /> : <Outlet />;
};
export default PublicRoute;
