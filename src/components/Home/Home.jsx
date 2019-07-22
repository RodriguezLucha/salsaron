import React from 'react';
import styles from './Home.module.scss';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.websiteTitle}>Salsaron</h1>
        <Link
          className={styles.loginLink}
          to="/login">Log In</Link>
      </div>
    );
  }
}

export default Home;