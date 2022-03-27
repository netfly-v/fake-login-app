import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import { auth } from '../../utils/auth';
// import styles from './MainPage.modules.css'

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Profile Page</h1>
      <button
        onClick={() => {
          auth.set(false);
          navigate(ROUTE.LOGIN);
        }}
      >
        Logout
      </button>
    </div>
  );
};
