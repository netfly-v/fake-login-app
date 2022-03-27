import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE } from './constants/routes';
import styles from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink to={ROUTE.HOME}>Main Page</NavLink>
      <NavLink to={ROUTE.LOGIN}>Login</NavLink>
      <NavLink to={ROUTE.NEWS}>News</NavLink>
      <NavLink to={ROUTE.PROFILE}>Profile</NavLink>
    </div>
  );
};
