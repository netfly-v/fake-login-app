import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css'

export const Menu = () => {
  return <div className={styles.menu}>
    <NavLink to='/'>Main Page</NavLink>
    <NavLink to='/login'>Login</NavLink>
    <NavLink to='/news'>News</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
  </div>
}