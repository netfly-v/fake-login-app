import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const authInfo = {
  username: 'admin',
  password: 'abc',
};

const errors = {
  login: 'invalid username',
  pass: 'invalid password',
};

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState({});
  //   const [loginState, setLoginState] = useState('');
  //   const [passState, setPassState] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const [name, pass] = e.target;

    // setLoginState(name.value);
    // setPassState(pass.value);
    console.log(name.value, pass.value);

    if (authInfo.username === name.value) {
      if (authInfo.password === pass.value) {
        setIsAuth(true);
        localStorage.setItem('auth', true);
        navigate('/profile');
      } else {
        setErrorMessage({ name: 'pass', message: errors.pass });
        localStorage.setItem('auth', false);
      }
    } else {
      setErrorMessage({ name: 'login', message: errors.login });
      localStorage.setItem('auth', false);
    }
  };

  const renderErrorMessage = errorName =>
    errorName === errorMessage.name ? <div className={styles.error}>{errorMessage.message}</div> : null;

  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
      {isAuth ? (
        <div>Logged successfully</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.loginInput}>
            <label>Username: </label>
            <input type="text" name="login" required />
            {renderErrorMessage('login')}
          </div>
          <div className={styles.passInput}>
            <label>Password: </label>
            <input type="password" name="pass" required />
            {renderErrorMessage('pass')}
          </div>
          <div className={styles.authButton}></div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
};
