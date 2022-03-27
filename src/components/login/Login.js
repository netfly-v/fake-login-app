import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../constants/routes';
import { auth } from '../../utils/auth';
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

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const [name, pass] = e.target;
    console.log(name.value, pass.value);

    if (authInfo.username === name.value) {
      if (authInfo.password === pass.value) {
        auth.set(true);
        navigate(ROUTE.PROFILE);
      } else {
        setErrorMessage({ name: 'pass', message: errors.pass });
        auth.set(false);
      }
    } else {
      setErrorMessage({ name: 'login', message: errors.login });
      auth.set(false);
    }
  };

  const renderErrorMessage = errorName =>
    errorName === errorMessage.name ? <div className={styles.error}>{errorMessage.message}</div> : null;

  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
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
    </div>
  );
};
