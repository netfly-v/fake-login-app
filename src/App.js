import React from 'react';
import { Menu } from './Menu';
import { Login } from './Login';
import { News } from './News';
import { Profile } from './Profile';
import { MainPage } from './MainPage';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  return localStorage.getItem('auth') === 'true' ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Menu />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/news" element={<News />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
