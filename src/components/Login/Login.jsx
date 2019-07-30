import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Login.module.scss';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label>Username
          <input type="text"/>
        </label>
        <label>Password
          <input type="password"/>
        </label>
        <Link
          className={styles.loginButton}
          to="/">Log In</Link>
      </div>
    );
  }
}

export default Login;