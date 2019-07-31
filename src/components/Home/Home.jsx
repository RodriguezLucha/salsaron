import React from 'react';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.navLinks}>
          <Link
            className={styles.loginLink}
            to="/login">Log In</Link>
          <Link
            className={styles.signUpLink}
            to="/signup">Sign Up</Link>
        </div>
        <div className={styles.dancers}>
          <h1 className={styles.websiteTitle}>Salsaron</h1>
        </div>
      </div>
    );
  }
}

export default Home;