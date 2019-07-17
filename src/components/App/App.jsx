import React from 'react';
import firebase from 'firebase';

import styles from './App.module.scss';
class App extends React.Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAseAypKaKt5uy_Vgu1EJBiZSn5TqAKpDc",
      authDomain: "salsaron-3a7af.firebaseapp.com",
      databaseURL: "https://salsaron-3a7af.firebaseio.com",
      projectId: "salsaron-3a7af",
      storageBucket: "",
      messagingSenderId: "534251724064",
      appId: "1:534251724064:web:4864c4a8ae3b4d49"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <button onPress={() => firebase.auth().signOut()}>
            Log Out
          </button>
        );
      case false:
        return <button>Login</button>;
      default:
        return <div>Loading</div>;
    }
  }


  render(){
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Salsaron</h1>
        {this.renderContent()}
      </div>
    ); 
  }
}

export default App;
