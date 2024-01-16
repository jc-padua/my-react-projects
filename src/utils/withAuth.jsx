import React from 'react';
import { useAuth } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

function withAuth(WrappedComponent) {
  return props => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) return <Navigate to={'/higher-order-component'} />;

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
