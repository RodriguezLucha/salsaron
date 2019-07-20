import React from 'react';
import styles from './App.module.scss';
class App extends React.Component {
  render(){
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Salsaron</h1>
      </div>
    );
  }
}

export default App;
