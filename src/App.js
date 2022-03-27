import React from 'react';
import { Menu } from './Menu';
import { Login } from './components/login/Login';
import { News } from './components/news/News';
import { Profile } from './components/profile/Profile';
import { MainPage } from './components/mainPage/MainPage';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './utils/auth';
import { Provider } from 'react-redux';
import { store } from './store';

const PrivateRoute = ({ children }) => {
  return auth.isAuth(true) ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
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
            />›
          </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;


