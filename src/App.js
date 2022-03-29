import React from 'react';
import { Menu } from './Menu';
import { Login } from './components/login/Login';
import News from './components/news/News';
import { Profile } from './components/profile/Profile';
import { MainPage } from './components/mainPage/MainPage';
import './reset.css';
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './utils/auth';
import { Provider } from 'react-redux';
import { store } from './store';
import { ROUTE } from './constants/routes';

const PrivateRoute = ({ children }) => (auth.isAuth() ? children : <Navigate to={ROUTE.LOGIN} />);

const LoginWithRedirect = () => (auth.isAuth() ? <Navigate to={ROUTE.PROFILE} /> : <Login />);

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <div className={styles.content}>
            <Routes>
              <Route path={ROUTE.HOME} element={<MainPage />} />
              <Route path={ROUTE.LOGIN} element={<LoginWithRedirect />} />
              <Route path={ROUTE.NEWS} element={<News />} />
              <Route
                path={ROUTE.PROFILE}
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              ›
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
