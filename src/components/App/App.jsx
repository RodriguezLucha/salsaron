import React from 'react';
import firebase from 'firebase';

import styles from './App.module.scss';
class App extends React.Component {
  state = {loggedIn: null, email: '', password: ''};

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAseAypKaKt5uy_Vgu1EJBiZSn5TqAKpDc',
        authDomain: 'salsaron-3a7af.firebaseapp.com',
        databaseURL: 'https://salsaron-3a7af.firebaseio.com',
        projectId: 'salsaron-3a7af',
        storageBucket: '',
        messagingSenderId: '534251724064',
        appId: '1:534251724064:web:4864c4a8ae3b4d49'
      });
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <button onClick={() => firebase.auth().signOut()}>
            Log Out
        </button>
      );
    case false:
      return (
        <div>
          <label>Email
            <input
              onChange={(e) => this.setState({email: e.currentTarget.value})}
              type="text"
              value={this.state.email}/>
          </label>
          <label>Password
            <input
              onChange={(e) => this.setState({password: e.currentTarget.value})}
              type="text"
              value={this.state.password}/>
          </label>
          <button onClick={() => this.signup()}>Sign Up</button>
          <button onClick={() => this.login()}>Log In</button>
        </div>
      );
    default:
      return <div>Loading</div>;
    }
  }

  login(){
    let email = this.state.email;
    let password = this.state.password;

    let state = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      console.log(`Error code : ${error} Email: ${email} Password: ${password} state: ${state}`);
    });
    console.log('Success.');
  }

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
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
