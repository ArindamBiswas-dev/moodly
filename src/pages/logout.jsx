import React from 'react';
import { Redirect, useHistory } from 'react-router';
import { useAuth } from '../context/AuthContext';

function Logout() {
  const { logout } = useAuth();
  const history = useHistory();

  logout();

  return <Redirect to="/" />;
}

export default Logout;
