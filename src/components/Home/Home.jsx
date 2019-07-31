import React from 'react';
import styles from './Home.module.scss';
import {Jumbotron} from 'reactstrap';
import Navbar from './Navbar';


class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar />

        <Jumbotron className={styles.dancers}>
          <h1 className={styles.websiteTitle}>Salsaron</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;